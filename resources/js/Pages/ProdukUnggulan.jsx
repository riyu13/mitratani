import React from "react";
import em4 from "../../../public/build/image/pupuk/em4.jpg";
import em4ungu from "../../../public/build/image/pupuk/em4ungu.jpg";
import npk1 from "../../../public/build/image/pupuk/npk1.jpg";
import npk2 from "../../../public/build/image/pupuk/npk2.png";
import npk3 from "../../../public/build/image/pupuk/npk3.png";
import npk4 from "../../../public/build/image/pupuk/npk4.png";
import npk5 from "../../../public/build/image/pupuk/npk5.png";

const ProdukUnggulan = () => {
    return (
        <div className="container mx-auto px-4">
            <h1
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-duration="1000"
                className="text-4xl font-bold text-center p-8 gap-4"
            >
                Produk Unggulan
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <img
                    data-aos="zoom-out"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    src={em4}
                    alt=""
                    className="shadow-2xl w-100 rounded-none"
                />
                <img
                    data-aos="zoom-out"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    src={npk1}
                    alt=""
                    className="shadow-2xl w-100 rounded-none"
                />
                <img
                    data-aos="zoom-out"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    src={npk5}
                    alt=""
                    className="shadow-2xl w-100 rounded-none"
                />
                <img
                    data-aos="zoom-out"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    src={npk2}
                    alt=""
                    className="shadow-2xl w-100 rounded-none"
                />
                <img
                    data-aos="zoom-out"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    src={npk3}
                    alt=""
                    className="shadow-2xl w-100 rounded-none"
                />
                <img
                    data-aos="zoom-out"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    src={npk4}
                    alt=""
                    className="shadow-2xl w-100 rounded-none"
                />
            </div>
        </div>
    );
};

export default ProdukUnggulan;
