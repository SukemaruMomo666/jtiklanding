<?php

use Illuminate\Support\Facades\Route;

/**
 * Public Landing Page Entry Point for JTIK POLSUB.
 * Routes all front-facing paths to the React SPA entry view.
 */
Route::get('/{any?}', function () {
    return view('app');
})->where('any', '.*');
