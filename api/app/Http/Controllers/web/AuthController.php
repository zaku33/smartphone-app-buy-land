<?php

namespace App\Http\Controllers;

use App\Models\NewsModel;
use App\Models\UserModel;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function getLogin()
    {
        $output = new \Symfony\Component\Console\Output\ConsoleOutput();
        $output->writeln(request());

        $username = request()->username;
        $password = request()->password;

        $get_profile = UserModel::where('username',$username)->first();
        try {
            if ($get_profile != null && Hash::check($password, $get_profile->password)) {
                return response()->json([
                    'status' => 200,
                    'message' => "Login Success !",
                    'access_token' => 'asd123asd123'
                ]);
            }else{
                return response()->json([
                    'status' => 403,
                    'message' => "Wrong username or password!"
                ]);
            }
        } catch (\Throwable $th) {
            throw response()->json([
                'status' => 500,
                'message' => $th->getMessage()
            ]);
        }


    }
}
