<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\UserModel;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;

class UserController extends Controller
{
    /**
     * login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login()
    {
        if (Auth::attempt(
            [
                'username' => request('username'),
                'password' => request('password')
            ]
        )) {
            $user = Auth::user();
            $success['message'] = "Login Success!";
            $success['status'] = 200;
            $success['token'] = $user->createToken('MyApp')->accessToken;

            return response()->json($success);
        } else {
            return response()->json(
                [
                    'error' => 'Unauthorised'
                ],
                401
            );
        }
    }

    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register()
    {
        $validator = Validator::make(
            request()->all(),
            [
                'username' => 'required|unique:users,username',
                'password' => 'required',
                'email' => 'required|email',
                'nickname' => 'required',
                'phone' => 'required'
            ]
        );

        if ($validator->fails()) {
            return response()->json(
                [
                    'error' => $validator->errors()
                ],
                401
            );
        }

        $user = new UserModel();
        $user->username = request('username');
        $user->password = bcrypt(request('password'));
        $user->email = request('email');
        $user->nickname = request('nickname');
        $user->phone = request('phone');
        $user->save();
        return response()->json([
            'message' => 'Register Successful!'
        ], 200);
    }

    /**
     * details api
     *
     * @return \Illuminate\Http\Response
     */
    public function details()
    {
        $user = Auth::user();

        return response()->json(
            [
                'success' => $user
            ],
            $this->successStatus
        );
    }
}
