<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('/login','AuthController@getLogin');

Route::get('/getNews','NewsController@getAllNews');
Route::get("/searchNews", 'NewsController@getNewsByQuery');

Route::get('/', function () {
    return view('welcome');
});
