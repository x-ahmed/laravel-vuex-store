<?php

use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\ProductController;
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


Route::group(['namespace' => 'Api'], function () {
    Route::get('/products', 'ProductController@index');
    Route::get('/products/{product}', 'ProductController@show');

    Route::get('/cart', 'CartController@index');
    Route::post('/cart', 'CartController@store');
    Route::delete('/cart/{productId}', 'CartController@destroy');
    Route::delete('/cart', 'CartController@destroyAll');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
