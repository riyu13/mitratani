import { Head } from '@inertiajs/react';
import { useState } from 'react'

const EditPupuk = (props) => {
 console.log("props in edit", props);
    const [nama, setNama] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [harga, setHarga] = useState("");
    const [satuan, setSatuan] = useState("");
    const [stok, setStok] = useState("");
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
          id: props.myPupuk.id,
            nama,
            deskripsi,
            harga,
            satuan,
            stok,
        };
        router.post("/addpupuk/edit", data);
        setIsNotif(true);
        setNama("");
        setDeskripsi("");
        setHarga("");
        setSatuan("");
        setStok("");
    };

    return (
        <div className="card card-body">
            <Head title='Edit Pupuk' />
            <h3 className="font-bold text-lg">Edit Pupuk</h3>
            <div className="card-body">
                {/* <div className="flex items-center justify-center">
                    <label htmlFor="upload" className="cursor-pointer">
                        <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-300 flex items-center justify-center">
                            <img
                                src=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </label>
                </div> */}
                <div className="flex flex-col">
                    <div className="text-base">Nama</div>
                    <input
                        type="text"
                        placeholder="Nama"
                        className="input input-ghost w-full max-w-xs"
                        onChange={(nama) => setNama(nama.target.value)}
                        defaultValue={props.myPupuk.nama}
                        required
                    />
                </div>
                <br />
                <div className="flex flex-col">
                    <div className="text-base">Deskripsi</div>
                    <input
                        type="text"
                        placeholder="Deskripsi"
                        className="input input-ghost w-full max-w-xs"
                        onChange={(deskripsi) =>
                            setDeskripsi(deskripsi.target.value)
                        }
                        defaultValue={props.myPupuk.deskripsi}
                        required
                    />
                    <br />
                </div>
                <div className="flex flex-col">
                    <div className="text-base">Harga</div>
                    <div className="relative">
                        <span className="text-xl">Rp. </span>
                        <input
                            type="number"
                            placeholder="Harga"
                            onChange={(harga) => setHarga(harga.target.value)}
                            defaultValue={props.myPupuk.harga}
                            className="input input-ghost w-full max-w-xs"
                        />
                    </div>
                </div>
                <br />
                <div className="text-base">Stok</div>
                <div className="flex flex-row">
                    <input
                        type="number"
                        onChange={(stok) => setStok(stok.target.value)}
                        defaultValue={props.myPupuk.stok}
                        placeholder="Stok"
                        className="input input-ghost w-full max-w-xs"
                    />
                    <select className="select select-ghost w-full max-w-xs">
                        <option
                            selected
                            onChange={(satuan) =>
                                setSatuan(satuan.target.value)
                            }
                            defaultValue={props.myPupuk.satuan}
                            required
                        >
                            Pilih Satuan
                        </option>
                        <option>Kilogram</option>
                        <option>Sachet</option>
                        <option>Pcs</option>
                        <option>Botol</option>
                    </select>
                </div>
                <br />
                <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleSubmit()}
                >
                    Update
                </button>
                <button className="btn btn-error btn-sm">Hapus</button>
            </div>
        </div>
    );
}

export default EditPupuk
    

