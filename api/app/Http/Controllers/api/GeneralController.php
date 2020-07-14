<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;

class GeneralController extends Controller
{
    protected function res_SM($status , $message)
    {
        return response()->json([
            'status' => $status,
            'message' => $message
        ]);
    }
}