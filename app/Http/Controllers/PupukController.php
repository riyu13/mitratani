<?php

namespace App\Http\Controllers;

use App\Http\Resources\PupukCollection;
use App\Models\Obat;
use App\Models\Pupuk;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PupukController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pupuk = new PupukCollection(Pupuk::paginate(10));
        $obat = new PupukCollection(Obat::paginate(10));
        return Inertia::render('Welcome', [
            'pupuk' => $pupuk,
            'obat' => $obat
        ]);
    }

    public function pupuk()
    {
        $pupuk = new PupukCollection(Pupuk::paginate(10));
        return Inertia::render('Pupuk', [
            'pupuk' => $pupuk,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $pupuk = new Pupuk();
        $pupuk->nama = $request->nama;
        $pupuk->deskripsi = $request->deskripsi;
        $pupuk->harga = $request->harga;
        $pupuk->stok = $request->stok;
        $pupuk->satuan = $request->satuan;

        // Unggah dan simpan gambar
        // if ($request->hasFile('gambar')) {
        //     $gambar = $request->file('gambar');
        //     $gambarName = time() . '.' . $gambar->getClientOriginalExtension();
        //     $gambar->move(public_path('uploads'), $gambarName);
        //     $pupuk->gambar = $gambarName;
        // }

        $pupuk->user = auth()->user()->email;
        $pupuk->save();

        return redirect()->back()->with('message', 'Pupuk Berhasil Ditambahkan');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pupuk  $pupuk
     * @return \Illuminate\Http\Response
     */
    public function show(Pupuk $pupuk)
    {
        $myPupuk = $pupuk::where('user', auth()->user()->email)->get();
        $myPupuk = new PupukCollection(Pupuk::paginate(8));
        return Inertia::render('AddPupuk', [
            'myPupuk' => $myPupuk,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pupuk  $pupuk
     * @return \Illuminate\Http\Response
     */
    public function edit(Pupuk $pupuk, Request $request)
    {
        return Inertia::render('Pupuk/EditPupuk', [
            'myPupuk' => $pupuk->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pupuk  $pupuk
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pupuk $pupuk)
    {
        Pupuk::where('id', $request->id)->update([
            'nama' => $request->nama,
            'deskripsi' => $request->deskripsi,
            'harga' => $request->harga,
            'stok' => $request->stok,
            'satuan' => $request->satuan,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pupuk  $pupuk
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $pupuk = Pupuk::find($request->id);
        $pupuk->delete();
        return redirect()->back()->with('message', 'Pupuk Berhasil Dihapus');
    }
}
