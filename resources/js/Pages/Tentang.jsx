import React from 'react'
import pertanian from '../../../public/build/image/pupuk/pertanian.png'

const Tentang = () => {
  return (
      <div
          className="bg-cover bg-center bg-no-repeat bg-fixed h-screen flex items-center justify-center"
          style={{
              backgroundImage: "url('/build/image/background.jpg')",
              maskImage: "linear-gradient(to bottom, transparent, black)",
          }}
      >
          <main className="app-main">
              <div className="store-info text-white">
                  <h2 className="text-4xl">Toko Pertanian</h2>
                  <p className="text-2xl">Nama Toko: Mitra Tani</p>
                  <p className="text-2xl">
                      Alamat: Desa Banjarjo, Kecamatan Nglegok,<br/> Kabupaten Blitar
                  </p>
              </div>
              <div className="store-map">
                  <iframe
                      title="Lokasi Toko"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      src={pertanian}
                      allowFullScreen
                  ></iframe>
              </div>
          </main>
      </div>
  );
}

export default Tentang