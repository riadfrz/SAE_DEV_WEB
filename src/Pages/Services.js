import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import TextToSpeechInstructions from "../components/text2seech_instructio/t2s";
import  Button  from "../components/formations/Button";
import { Link } from "react-router-dom";


import React from "react";

function Services() {
    return (
        <div>
            <Navbar />
            <TextToSpeechInstructions />
            <h1>Page non disponible pour l'instant </h1>
            <Link to="/"> <Button>à l'accueil</Button></Link>
            <Footer />
        </div>
    );
}

export default Services;