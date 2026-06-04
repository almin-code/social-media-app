<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

Route::get("db-test", function(){
    $users = DB::table('users')->count();

    return response()->json([
        "message" => "Database connection works!",
        "users_count" => $users,
    ]);
});

Route::get("/test", function(){
    return response()->json([
        "message" => "Laravel api radi"
    ]);
});

