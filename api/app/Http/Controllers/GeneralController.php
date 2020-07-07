<?php

namespace App\Http\Controllers;

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