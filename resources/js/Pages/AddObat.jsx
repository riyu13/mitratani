import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from 'react'
import DataObatAdmin from "./Obat/DataObatAdmin";

const AddObat = (props) => {
const [nama, setNama] = useState("");
const [deskripsi, setDeskripsi] = useState("");
const [harga, setHarga] = useState("");
const [satuan, setSatuan] = useState("");
const [stok, setStok] = useState("");


    console.log("props obat", props);
  return (
      <AuthenticatedLayout
          auth={props.auth}
          errors={props.errors}
          header={
              <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                  Tambah Obat
              </h2>
          }
      >
          <Head title="Tambah Obat" />
          <div className="py-12">
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                  <div className="bg-zinc-50 overflow-hidden shadow-sm sm:rounded-lg card-bordered">
                      <div className="p-6 text-gray-900">
                          {/* You can open the modal using ID.showModal() method */}
                          {/* Open the modal using ID.showModal() method */}
                          <button
                              className="btn"
                              onClick={() => window.my_modal_2.showModal()}
                          >
                              Tambah
                          </button>
                          <dialog id="my_modal_2" className="modal">
                              <form method="dialog" className="modal-box">
                                  <h3 className="font-bold text-lg">
                                      Tambah Obat
                                  </h3>
                                  <div className="card-body">
                                      <div className="flex flex-col">
                                          <div className="text-base">Nama</div>
                                          <input
                                              type="text"
                                              placeholder="Nama"
                                              className="input input-ghost w-full max-w-xs"
                                              onChange={(nama) =>
                                                  setNama(nama.target.value)
                                              }
                                              value={nama}
                                              required
                                          />
                                      </div>
                                      <br />
                                      <div className="flex flex-col">
                                          <div className="text-base">
                                              Deskripsi
                                          </div>
                                          <textarea
                                              placeholder="Deskripsi"
                                              className="textarea"
                                              value={deskripsi}
                                              onChange={(deskripsi) =>
                                                  setDeskripsi(
                                                      deskripsi.target.value
                                                  )
                                              }
                                              required
                                          ></textarea>
                                          <br />
                                      </div>
                                      <div className="flex flex-col">
                                          <div className="text-base">Harga</div>
                                          <div className="relative">
                                              <span className="text-xl">
                                                  Rp.{" "}
                                              </span>
                                              <input
                                                  type="number"
                                                  placeholder="Harga"
                                                  value={harga}
                                                  onChange={(harga) =>
                                                      setHarga(
                                                          harga.target.value
                                                      )
                                                  }
                                                  className="input input-ghost w-full max-w-xs"
                                                  required
                                              />
                                          </div>
                                      </div>
                                      <br />
                                      <div className="text-base">Stok</div>
                                      <div className="flex flex-row">
                                          <input
                                              type="number"
                                              value={stok}
                                              onChange={(stok) =>
                                                  setStok(stok.target.value)
                                              }
                                              placeholder="Stok"
                                              className="input input-ghost w-full max-w-xs"
                                              required
                                          />
                                          <select
                                              className="select select-ghost w-full max-w-xs"
                                              onChange={(satuan) =>
                                                  setSatuan(satuan.target.value)
                                              }
                                              required
                                              selected
                                          >
                                              <option selected value={""}>
                                                  Pilih Satuan
                                              </option>
                                              <option value={"Kilogram"}>
                                                  Kilogram
                                              </option>
                                              <option value={"Sachet"}>
                                                  Sachet
                                              </option>
                                              <option value={"Pcs"}>Pcs</option>
                                              <option value={"Botol"}>
                                                  Botol
                                              </option>
                                          </select>
                                      </div>
                                      <br />
                                      <div className="flex flex-row items-right justify-end">
                                          <button
                                              className="btn btn-success"
                                            //   onClick={handleSubmit}
                                              disabled={
                                                  nama === "" || // Tambahkan validasi lain jika diperlukan
                                                  deskripsi === "" ||
                                                  harga === "" ||
                                                  stok === "" ||
                                                  satuan === ""
                                              }
                                          >
                                              Simpan
                                          </button>

                                          <button
                                              className="btn btn-error"
                                              type="reset"
                                          >
                                              Hapus
                                          </button>
                                      </div>
                                  </div>
                              </form>
                              <form method="dialog" className="modal-backdrop">
                                  <button>close</button>
                              </form>
                          </dialog>

                          <div>
                        <DataObatAdmin obat={props.myObat.data}/>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </AuthenticatedLayout>
  );
}

export default AddObat