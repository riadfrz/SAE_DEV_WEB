import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Pres from "../components/pres_code/pres";
import Actu from "../components/actu/Actu";
import TextToSpeechInstructions from "../components/text2seech_instructio/t2s";

import React from "react";
import classes from "../components/pres_code/Presentation.module.css";

function Presentation() {
    return (
        <div>

            <Navbar />
            <TextToSpeechInstructions />
            <Pres />
            <Actu />
            <div className={classes.EndPage}></div>
            <Footer />
        </div>
    );
}

export default Presentation;
