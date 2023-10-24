import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Agenda from './components/agenda/Agenda'
import Carte from './components/carte/carte'
import Actu from './components/actu/Actu'
import Event from './components/event/ImageSlider'
import { SliderData } from './components/event/SliderData';
import Footer from './components/footer/Footer'
import TextToSpeechInstructions from "./components/text2seech_instructio/t2s";




function App() {
  return (
    <div>
        <Navbar />
        <TextToSpeechInstructions />
        <Hero />
        <Actu />
        <Event slides={SliderData} />
        <Agenda />
        <Carte />
        <Footer />
    </div>
  );
}

export default App;
