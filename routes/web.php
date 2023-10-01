<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PupukController;
use App\Http\Controllers\ObatController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', [PupukController::class, 'index']);
Route::get('/pupuk', [PupukController::class, 'pupuk']);

Route::post('/pupuk', [PupukController::class, 'store'])
    ->middleware(['auth', 'verified'])->name('create.pupuk');

Route::get('/addpupuk', [PupukController::class, 'show'])
    ->middleware(['auth', 'verified'])
    ->name('addpupuk');
Route::get('pupuk/editpupuk', [PupukController::class, 'edit'])
    ->middleware(['auth', 'verified'])
    ->name('edit.addpupuk');
Route::post('/pupuk/update', [PupukController::class, 'update'])
    ->middleware(['auth', 'verified'])
    ->name('update.addpupuk');
Route::post('/pupuk/delete', [PupukController::class, 'destroy'])
    ->middleware(['auth', 'verified'])
    ->name('delete.pupuk');
Route::get('/addobat', [ObatController::class, 'show'])
    ->middleware(['auth', 'verified'])
    ->name('addobat');


Route::get('/obat', [ObatController::class, 'index']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
