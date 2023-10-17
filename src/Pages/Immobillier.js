import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import immo from "../components/immobillier/immo";

import React from "react";

function Immobillier() {
    return (
        <div>

            <Navbar />
            <immo />
            <Footer />
        </div>
    );
}

export default Immobillier;
