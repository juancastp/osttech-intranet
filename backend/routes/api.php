<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\TimeEntryController;

Route::apiResource('users', UserController::class);
Route::apiResource('clients', ClientController::class);
Route::apiResource('orders', OrderController::class);
Route::apiResource('roles', RoleController::class);
Route::apiResource('time-entries', TimeEntryController::class);
