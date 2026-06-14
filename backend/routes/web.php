<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('welcome');
});

Route::get("/auth/status", function(Request $request){
    return response()->json([
        "authenticated" => $request->user() !== null,
        "user" => $request->user(),
    ]);
});