<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Mail\ResetPassMail;
use App\Models\UserModel;
use Illuminate\Support\Facades\Auth;
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

    public function forgotPass()
    {
        $email = request('email');

        $find_user = UserModel::where('email',$email)->first();

        if(!$find_user){
            return resMes("The user with this email doesn't exist!",404);
        }

        $objData = new \stdClass();
        $objData->demo_one = 'Demo One Value';
        $objData->demo_two = 'Demo Two Value';
        $objData->sender = env('MAIL_NAME','LandAdmin');
        $objData->receiver = $find_user->username;
 
        Mail::to($email)->send(new ResetPassMail($objData));
        return resMes("Send to email success! Check your email to reset password");
    }
}
