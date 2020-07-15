<?php
/**
 * This function will return sattus and message
 * @param $status - status code
 * @param $message - message text
 */
function resMes($status, $message)
{
    return response()->json([
        'status' => $status,
        'message' => $message
    ]);
}
