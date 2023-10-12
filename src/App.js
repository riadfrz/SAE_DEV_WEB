import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Agenda from './components/agenda/Agenda'
import Carte from './components/carte/carte'
import Actu from './components/actu/Actu'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      
      <Navbar />
      <Hero />
      <Actu />
      <Agenda />
      {/* <Carte /> */}
   <Footer />

    </div>
  );
}

export default App;
