import React from "react";
import Navbar from "./Partials/Navbar";
import DataObat from "./Obat/DataObat";
import { Head } from "@inertiajs/react";
import PaginationObat from "./Obat/PaginationObat";

const Obat = (props) => {
    return (
        <div>
            <Head title="Obat" />
            <Navbar />
            <br/>
            <br/>
            <br/>
            <DataObat obat={props.obat.data} />
            <br/>
            <PaginationObat meta={props.obat.meta} />
        </div>
    );
};

export default Obat;
