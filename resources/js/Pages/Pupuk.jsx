import React from "react";
import Navbar from "./Partials/Navbar";
import DataPupuk from "./Pupuk/DataPupuk";
import Pgination from "./Partials/Pgination";
import { Head } from "@inertiajs/react";

const Pupuk = (props) => {
    console.log("props", props);
    return (
        <div id="pupukid">
            <Head title="Pupuk"></Head>
            <Navbar />
            <br />
            <br />
            <br />
            <DataPupuk pupuk={props.pupuk.data} />
            <br/>
            <Pgination meta={props.pupuk.meta} />
        </div>
    );
};

export default Pupuk;
