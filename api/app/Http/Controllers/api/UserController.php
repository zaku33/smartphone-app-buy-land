<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Mail\ResetPassMail;
use App\Models\UserModel;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function login()
    {
        if (Auth::attempt(
            [
                'username' => request('username'),
                'password' => request('password')
            ]
        )) {
            $user = Auth::user();
            $success['message'] = __('api.login_ok');
            $success['status'] = 200;
            $success['token'] = $user->createToken('MyApp')->accessToken;

            return response()->json($success);
        } else {
            return response()->json(
                [
                    'status' => 401,
                    'error' => __('api.wrong_user_or_pass')
                ]
            );
        }
    }

    public function register()
    {
        $validator = Validator::make(
            request()->all(),
            [
                'username' => 'required|unique:users,username',
                'password' => 'required',
                'email' => 'required|email|unique:users,email',
                'nickname' => 'required',
                'phone' => 'required'
            ]
        );

        if ($validator->fails()) {
            return response()->json(
                [
                    'status' => 401,
                    'error' => $validator->errors()
                ]
            );
        }

        $user = new UserModel();
        $user->username = request('username');
        $user->password = bcrypt(request('password'));
        $user->email = request('email');
        $user->nickname = request('nickname');
        $user->phone = request('phone');
        $user->save();
        return resMes(__('api.register_ok'));
    }

    public function details()
    {
        $user = Auth::user();
        return resMes("", 200, $user);
    }

    public function updateUser(){
        $nickname = request('nickname');
        $avatar = request('avatar');
        $oldPass = request('oldPass');
        $newPass = request('newPass');
        $user_id = Auth::user()->id;
        $found_user = UserModel::find($user_id);
        if(!$found_user) return resMes("Not Found",404);
        if($oldPass && $newPass){
            if(!Hash::check($oldPass,$found_user->password)){
                return resMes("Old password not match!",401);
            }
            $found_user->password = bcrypt($newPass);
        }
        $found_user->nickname = $nickname;
        $found_user->avatar = $avatar;
        $found_user->save();
        return resMes("Update success", 200);
    }

    public function forgotPass()
    {
        $email = request('email');

        $find_user = UserModel::where('email', $email)->first();

        if (!$find_user) {
            return resMes("The user with this email doesn't exist!", 404);
        }

        $new_password = randStr(6);
        $find_user->password = bcrypt($new_password);
        $find_user->save();

        $objData = new \stdClass();
        $objData->new_password = $new_password;
        $objData->sender = env('MAIL_NAME', 'LandAdmin');
        $objData->receiver = $find_user->username;

        Mail::to($email)->send(new ResetPassMail($objData));
        return resMes("Send to email success! Check your email to reset password");
    }
}
