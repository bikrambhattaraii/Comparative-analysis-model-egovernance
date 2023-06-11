<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\CountryController;

// Route::post('/forms', [FormController::class, 'store']);
// Route::get('/forms/{id}', [FormController::class, 'show']);
// Route::put('/forms/{id}', [FormController::class, 'update']);
// Route::delete('/forms/{id}', [FormController::class, 'destroy']);


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/country',CountryController::class);
