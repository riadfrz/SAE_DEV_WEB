import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import {Pres} from "../components/pres_code/pres.js";
import React from "react";

function Presentation() {
    return (
        <div>

            <Navbar />
            <Pres />
            <Footer />
        </div>
    );
}

export default Presentation;
