<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\TimeEntryController;

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::middleware(['auth:sanctum', 'role:empleado'])->group(function () {
    Route::apiResource('clients', ClientController::class);
    Route::apiResource('orders', OrderController::class);
    Route::apiResource('time-entries', TimeEntryController::class);
});

Route::middleware('auth:sanctum')->get('/user', [UserController::class, 'show']);
