import { Head } from "@inertiajs/react";
import Navbar from "./Partials/Navbar";
import Homepage from "./Homepage";
import ProdukUnggulan from "./ProdukUnggulan";
import Tentang from "./Tentang";
import Footer from "./Footer";

export default function Welcome(props) {
    console.log("props", props);
    return (
        <div>
            <Head title="Mitra Tani" />
            <Navbar user={props.auth.user}/>
            <Homepage />
            <ProdukUnggulan/>
            <Tentang/>
            <Footer/>
        </div>
    );
}
