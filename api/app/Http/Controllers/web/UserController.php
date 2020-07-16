<?php

namespace App\Http\Controllers;

use App\Models\NewsModel;
use App\Models\UserModel;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function createProfile()
    {
        $username = request('username');
        $password = request('password');
        $email = request('email');
        $nickname = request('nickname');
        $phone = request('phone');

        $exist_username_or_email = UserModel::where('username', $username)->first()->id ?? null;

        if ($exist_username_or_email != null) {
            return resMes('Username already exists !',403);
        }
        $profile = new UserModel();
        $profile->username = $username;
        $profile->password = Hash::make($password);
        $profile->email = $email;
        $profile->nickname = $nickname;
        $profile->phone = $phone;
        $profile->save();
        return resMes('Registered successful!');
    }

    public function detailProfile($profile_id)
    {
        $profile = UserModel::find($profile_id);
        return response()->json([
            'status' => 200,
            'data' => $profile
        ]);
    }

    public function updateProfile($profile_id)
    {
    }
}
