import React from 'react'
import { FaDoorClosed, FaEdit } from 'react-icons/fa';
import { RxUpdate } from 'react-icons/rx';

const DataObatAdmin = ({ obat }) => {
    console.log("data", obat);
  return (
      <div>
          <div
              className="text-gray-500 text-xl gap-2 mb-4 pt-4"
              data-aos="fade-up"
          >
              Daftar Obat
          </div>
          <div
              className="flex justify-end items-center"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-duration="1000"
          >
              <input
                  className="input input-bordered join-item"
                  placeholder="Pencarian"
              />
              <button className="btn join-item">Cari</button>
          </div>
          <div className="overflow-x-auto">
              <table className="table">
                  {/* head */}
                  <thead
                      data-aos="fade-left"
                      data-aos-delay="100"
                      data-aos-offset="200"
                      data-aos-duration="1000"
                  >
                      <tr>
                          <th className="text-xl">Nama</th>
                          <th className="text-xl">Kegunaan</th>
                          <th className="text-xl">Harga</th>
                          <th className="text-xl">Opsi</th>
                          <th></th>
                      </tr>
                  </thead>
                  {obat.map((data, index) => (
                      <tbody key={index}>
                          {/* row 1 */}
                          <tr data-aos="fade-left" data-aos-delay="100">
                              <td>
                                  <div className="flex items-center space-x-3">
                                      <div>
                                          <div className="font-bold">
                                              {data.nama}
                                          </div>
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  {data.deskripsi}
                                  <br />
                              </td>
                              <td>
                                  {new Intl.NumberFormat("id-ID", {
                                      style: "currency",
                                      currency: "IDR",
                                  }).format(data.harga)}{" "}
                                  <span
                                      className={`badge ${
                                          data.stok === 0
                                              ? "badge-error"
                                              : data.stok <= 10
                                              ? "badge-warning"
                                              : data.stok <= 20
                                              ? "badge-success"
                                              : "badge-info"
                                      }`}
                                  >
                                      stok: {data.stok} {data.satuan}
                                  </span>
                              </td>
                              <div className="flex flex-row items-center justify-items-center">
                                  <button
                                      className="btn btn-warning"
                                      onClick={() => openEditModal(data)}
                                  >
                                      <FaEdit />
                                  </button>
                                  <dialog
                                      id="my_modal_5"
                                      className="modal modal-bottom sm:modal-middle"
                                  >
                                      <div className="modal-box">
                                          <h3 className="font-bold text-lg">
                                              Edit Pupuk
                                          </h3>
                                          <div className="card-body">
                                              <div className="flex flex-col">
                                                  <div className="text-base">
                                                      Nama
                                                  </div>
                                                  <input
                                                      type="text"
                                                      placeholder="Nama"
                                                      className="input input-ghost w-full max-w-xs"
                                                    //   onChange={(nama) =>
                                                    //       setEditData({
                                                    //           ...editData,
                                                    //           nama: nama.target
                                                    //               .value,
                                                    //       })
                                                    //   }
                                                    //   value={editData.nama}
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
                                                    //   onChange={(deskripsi) =>
                                                    //       setEditData({
                                                    //           ...editData,
                                                    //           deskripsi:
                                                    //               deskripsi
                                                    //                   .target
                                                    //                   .value,
                                                    //       })
                                                    //   }
                                                    //   value={editData.deskripsi}
                                                      required
                                                  ></textarea>
                                                  <br />
                                              </div>
                                              <div className="flex flex-col">
                                                  <div className="text-base">
                                                      Harga
                                                  </div>
                                                  <div className="relative">
                                                      <span className="text-xl">
                                                          Rp.{" "}
                                                      </span>
                                                      <input
                                                          type="number"
                                                          placeholder="Harga"
                                                        //   onChange={(harga) =>
                                                        //       setEditData({
                                                        //           ...editData,
                                                        //           harga: harga
                                                        //               .target
                                                        //               .value,
                                                        //       })
                                                        //   }
                                                        //   value={editData.harga}
                                                          className="input input-ghost w-full max-w-xs"
                                                      />
                                                  </div>
                                              </div>
                                              <br />
                                              <div className="text-base">
                                                  Stok
                                              </div>
                                              <div className="flex flex-row">
                                                  <input
                                                      type="number"
                                                    //   onChange={(stok) =>
                                                    //       setEditData({
                                                    //           ...editData,
                                                    //           stok: stok.target
                                                    //               .value,
                                                    //       })
                                                    //   }
                                                    //   value={editData.stok}
                                                      placeholder="Stok"
                                                      className="input input-ghost w-full max-w-xs"
                                                  />
                                                  <select
                                                      className="select select-ghost w-full max-w-xs"
                                                    //   value={editData.satuan}
                                                    //   onChange={(satuan) =>
                                                    //       setEditData({
                                                    //           ...editData,
                                                    //           satuan: satuan
                                                    //               .target.value,
                                                    //       })
                                                    //   }
                                                      required
                                                  >
                                                      <option value="">
                                                          Pilih Satuan
                                                      </option>
                                                      <option value="Kilogram">
                                                          Kilogram
                                                      </option>
                                                      <option value="Sachet">
                                                          Sachet
                                                      </option>
                                                      <option value="Pcs">
                                                          Pcs
                                                      </option>
                                                      <option value="Botol">
                                                          Botol
                                                      </option>
                                                  </select>
                                              </div>
                                              <br />
                                              <div className="modal-action">
                                                  <form method="dialog">
                                                      <button
                                                          className="btn btn-warning"
                                                        //   onClick={() =>
                                                        //       handleUpdate()
                                                        //   }
                                                      >
                                                          <RxUpdate />
                                                      </button>
                                                      <button className="btn btn-error">
                                                          <FaDoorClosed />
                                                      </button>
                                                  </form>
                                              </div>
                                          </div>
                                      </div>
                                  </dialog>
                                  {/* <Link
                                      href={route("delete.pupuk")}
                                      method="post"
                                      data={{
                                          id: data.id,
                                      }}
                                      as="button"
                                  >
                                      <button className="btn btn-error">
                                          <FaTrash />
                                      </button>
                                  </Link> */}
                              </div>
                          </tr>
                      </tbody>
                  ))}
              </table>
          </div>
      </div>
  );
}

export default DataObatAdmin