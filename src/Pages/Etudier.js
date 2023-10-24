import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../../src/components/header/header'
import LogementRestauration from '../../src/components/logement-restauration/logement-restauration'
import Carte from '../components/carte/carte'
import Formations from '../../src/components/formations/formations'
import Event from '../../src/components/aides/ImageSlider'
import { SliderData } from '../components/aides/SliderData';
import Footer from '../components/footer/Footer'
import Etudiant from '../../src/components/etudiant/etudiant'
import classes from "../components/pres_code/Presentation.module.css";
import TextToSpeechInstructions from "../components/text2seech_instructio/t2s";





function Etudier() {
    return (
        <div>

            <Navbar />
            <TextToSpeechInstructions />
            <Header />
            <Formations/>
            <Etudiant />
            <Event slides={SliderData} />
            <LogementRestauration />
            <div className={classes.EndPage}></div>
            <Footer />
        </div>
    );
}

export default Etudier;
