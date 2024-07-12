<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use app\Http\Controllers\UserController;
use app\Http\Controllers\ClientController;
use app\Http\Controllers\OrderController;
use app\Http\Controllers\RoleController;
use app\Http\Controllers\TimeEntryController;

Route::apiResource('users', UserController::class);
Route::apiResource('clients', ClientController::class);
Route::apiResource('orders', OrderController::class);
Route::apiResource('roles', RoleController::class);
Route::apiResource('time-entries', TimeEntryController::class);
