import React from "react";

const Homepage = () => {
  return (
      <div>
          <div
              className="bg-cover bg-center bg-no-repeat bg-fixed h-screen flex items-center justify-center"
              style={{
                  backgroundImage: "url('/build/image/background.jpg')",
                  maskImage: "linear-gradient(to bottom, transparent, black)",
              }}
          >
              <div data-aos="fade-right" data-aos-delay="300">
                  <p className="text-white text-8xl">Mitra Tani</p>
              </div>
              <div className="text-white text-4xl">
                  <p data-aos="fade-left" data-aos-delay="600">
                      Toko penjualan alat, pupuk, dan obat pertanian dengan
                      kualitas terjamin harga terjangkau,
                      <br />
                      memenuhi kebutuhan pertanian dan perkebunan dengan
                      lengkap.
                  </p>
              </div>
          </div>
      </div>
  );
};

export default Homepage;
