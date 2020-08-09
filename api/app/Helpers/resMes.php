<?php

/**
 * This function will return sattus and message
 * @param $message - message text
 * @param $status - status code
 * @param $data - array of data
 */
function resMes($message = "", $status = 200, $data = [])
{
    return response()->json([
        'status' => $status,
        'message' => $message,
        'data' => $data
    ]);
}
