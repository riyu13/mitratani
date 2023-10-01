import React from 'react'

const DataObat = ({ obat }) => {
  return (
      <div>
          <div
              className="text-gray-500 text-4xl gap-2 mb-4 pt-4"
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
          <div className="flex justify-center">
              <div className="grid grid-cols-5 gap-8 mt-2">
                  {obat.map((data, i) => (
                      <div key={i} className="card bg-base-100 shadow-xl" data-aos="zoom-out">
                          <figure>{data.image}</figure>
                          <div className="card-body">
                              <h2 className="card-title">{data.nama} </h2>
                              <p>{data.deskripsi}</p>
                              <div className="card-actions justify-end">
                                  <div className="badge badge-outline">
                                      {new Intl.NumberFormat("id-ID", {
                                          style: "currency",
                                          currency: "IDR",
                                      }).format(data.harga)}{" "}
                                  </div>
                                  <div className="badge badge-outline">
                                      Stok: {data.stok} {data.satuan}
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
}

export default DataObat