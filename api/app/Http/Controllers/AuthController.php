<?php

namespace App\Http\Controllers;

use App\Models\NewsModel;
use App\Models\ProfileModel;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function getLogin()
    {
        $username = request()->username;
        $password = request()->password;

        $get_profile = ProfileModel::where('username',$username)->first();

        if ($get_profile != null && Hash::check($password, $get_profile->password)) {
            return response()->json([
                'status' => 200,
                'message' => "Login Success",
                'access_token' => 'asd123asd123'
            ]);
        }
    }
}