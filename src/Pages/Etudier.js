import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import LogementRestauration from '../../src/components/logement-restauration/logement-restauration'
import Carte from '../components/carte/carte'
import Formations from '../../src/components/formations/formations'
import Event from '../../src/components/aides/ImageSlider'
import { SliderData } from '../components/aides/SliderData';
import Footer from '../components/footer/Footer'
import Etudiant from '../../src/components/etudiant/etudiant'



function Etudier() {
    return (
        <div>

            <Navbar />
            <Header />
            <Formations/>
            <Etudiant />
            <Event slides={SliderData} />
            <LogementRestauration />
            <Carte />
            <Footer />

        </div>
    );
}

export default Etudier;
