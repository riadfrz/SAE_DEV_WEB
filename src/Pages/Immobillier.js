import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Immo from "../components/immobillier/Immo";
import React from "react";
import TextToSpeechInstructions from "../components/text2seech_instructio/t2s";


function Immobillier() {
    return (
        <div>

            <Navbar />
            <TextToSpeechInstructions />
            <Immo />
            <Footer />
        </div>
    );
}

export default Immobillier;