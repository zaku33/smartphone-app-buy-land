<?php

/**
 * This function will return sattus and message
 * @param $status - status code
 * @param $message - message text
 */
function resMes($message = "", $status = 200, $data = [])
{
    return response()->json([
        'status' => $status,
        'message' => $message,
        'data' => $data
    ]);
}
