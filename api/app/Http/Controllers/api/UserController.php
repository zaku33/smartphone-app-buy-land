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
        $user_id = Auth::user()->id;
        $found_user = UserModel::find($user_id);
        if(!$found_user) return resMes("Not Found",404);
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

    public function editUser()
    {
        $user_info = Auth::user();
        $user_pass = $user_info['password'];
        $user_id = Auth::user()['id'];
        $query = [];

        $input_old_password = request('input_old_password');
        $input_new_password = request('input_new_password');

        if($input_old_password){
            if (!Hash::check($input_old_password, $user_pass)) {
                return resMes("Wrong password!", 404);
            }
            if (Hash::check($input_new_password, $user_pass)) {
                return resMes("Password unchanged!", 404);
            }
        }
        
        $temp_pass = $input_new_password != null ? ["password" => bcrypt($input_new_password)] : null;
        $input_avatar = request('input_avatar') != null ? ["avatar" => request('input_avatar')] : null;
        $input_nickname = request('input_nickname') != null ? ["nickname" => request('input_nickname')] : null;
        $concat_query = [
            $temp_pass, $input_avatar, $input_nickname
        ];
        foreach ($concat_query as $q) {
            if ($q != null) {
                foreach ($q as $key => $val) {
                    $query[$key] = $val;
                }
            }
        }

        UserModel::find($user_id)->update($query);

       
        return ResMes("Password changed successfully!");
    }

    public function getOrderUserInfoById()
    {
        $req_uid = request("id");
        $user_info = UserModel::find($req_uid);
        $data_obj = [
            'nickname' => $user_info->nickname,
            'avatar'    => $user_info->avatar
        ];
        if($user_info == null)
        {
            return resMes("User not found!", 404);
        }
        return resMes("User found!", 200,$data_obj);
    }
}
