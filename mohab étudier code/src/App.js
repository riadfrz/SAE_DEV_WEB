import React from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/header'
import LogementRestauration from '../../src/components/logement-restauration/logement-restauration'
import Carte from './components/Carte/carte'
import Formations from '../../src/components/formations/formations'
import Event from '../../src/components/aides/ImageSlider'
import { SliderData } from '../../src/components/aides/SliderData';
import Footer from './components/footer/Footer'
import Etudiant from '../../src/components/etudiant/etudiant'



function App() {
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

export default App;
