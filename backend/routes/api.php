<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\TimeEntryController;

Route::middleware('api')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    
    Route::middleware(['auth:sanctum', 'role:superadmin'])->group(function () {
        Route::apiResource('users', UserController::class);
        Route::apiResource('roles', RoleController::class);
    });

    Route::middleware(['auth:sanctum', 'role:empleado'])->group(function () {
        Route::apiResource('clients', ClientController::class);
        Route::apiResource('orders', OrderController::class);
        Route::apiResource('time-entries', TimeEntryController::class);
    });
});
