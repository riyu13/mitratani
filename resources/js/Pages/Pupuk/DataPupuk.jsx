import React from 'react'

const DataPupuk = ({pupuk}) => {
  return (
      <div>
          <div
              className="text-gray-500 text-4xl gap-2 mb-4 pt-4"
              data-aos="fade-up"
          >
              Daftar Pupuk
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
                          <th className="text-2xl">Nama</th>
                          <th className="text-2xl">Kegunaan</th>
                          <th className="text-2xl">Harga</th>
                          <th></th>
                      </tr>
                  </thead>
                  {pupuk.map((data, i) => (
                      <tbody key={i}>
                          {/* row 1 */}
                          <tr data-aos="fade-left" data-aos-delay="100">
                              <td>
                                  <div className="flex items-center space-x-3">
                                      {/* <div className="avatar"> */}
                                          {/* <div className="mask mask-squircle w-12 h-12"> */}
                                              {/* Tampilkan gambar menggunakan tag <img> */}
                                              {/* <img
                                                  src={`/uploads/${data.gambar}`} // Ganti path sesuai dengan lokasi penyimpanan gambar
                                                  alt={data.nama}
                                                  className="w-full h-full object-cover"
                                              />
                                          </div>
                                      </div> */}
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
                                  <span className="badge badge-success">
                                      stok: {data.stok} {data.satuan}
                                  </span>
                              </td>
                          </tr>
                      </tbody>
                  ))}
              </table>
          </div>
      </div>
  );
}

export default DataPupuk