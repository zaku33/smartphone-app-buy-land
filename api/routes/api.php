<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', 'api\UserController@login');
Route::post('register', 'api\UserController@register');
Route::post('forgotPass','api\UserController@forgotPass');


Route::group(['middleware' => 'auth:api'], function() {
    // USER
    Route::get('details', 'api\UserController@details');
    Route::put('updateUser', 'api\UserController@updateUser');

    // NEWS
    Route::get('getNews','api\NewsController@getAllNews');
    Route::get('searchNews', 'api\NewsController@getNewsByQuery');
    Route::get('getNewsByPrice', 'api\NewsController@getNewsByPrice');
    Route::get('getNewsById' , 'api\NewsController@getNewsById');
    Route::get('getLikedNewsLocation', 'api\NewsController@getLikedNewsLocation');

    Route::post('likeThisNews', 'api\NewsController@likeThisNews');
    Route::post('createNews' , 'api\NewsController@createNews');

    Route::put('updateNews' , 'api\NewsController@updateNews');

    Route::post('deleteNews', 'api\NewsController@deleteNews');
});
