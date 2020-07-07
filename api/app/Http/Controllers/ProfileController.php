<?php

namespace App\Http\Controllers;

use App\Models\NewsModel;
use App\Models\ProfileModel;
use Illuminate\Support\Facades\Hash;

class ProfileController extends GeneralController
{
    public function createProfile()
    {
        $username = request('username');
        $password = request('password');
        $email = request('email');
        $nickname = request('nickname');
        $phone = request('phone');

        $exist_username_or_email = ProfileModel::where('username', $username)->first()->id ?? null;

        if ($exist_username_or_email != null) {
            return $this->res_SM(403, 'Username already exists !');
        }
        $profile = new ProfileModel();
        $profile->username = $username;
        $profile->password = Hash::make($password);
        $profile->email = $email;
        $profile->nickname = $nickname;
        $profile->phone = $phone;
        $profile->save();
        return $this->res_SM(200, 'Registered successful!');
    }

    public function detailProfile($profile_id)
    {
        $profile = ProfileModel::find($profile_id);
        return response()->json([
            'status' => 200,
            'data' => $profile
        ]);
    }

    public function updateProfile($profile_id)
    {
    }
}
