import React, { useState } from "react";
import styles from './Carte.module.css';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MapIcon from '../../images/placeholder.png';
import Button from'./Button';
import useSpeechSynthesis from '../../Functions/Text2speech';
import { Link } from 'react-router-dom';
const Carte = () => {
    const { spokenText, speaking, toggleSpeakText } = useSpeechSynthesis(); 

    const [center] = useState({ lat: 48.5797, lng: -3.83332 });
    const [Guerlesquin] = useState({ lat: 48.5167, lng: -3.5833 });
    const [Plouezoch] = useState({ lat: 48.6333, lng: -3.8167 });
    const [Locquirec] = useState({ lat: 48.69243, lng: -3.64554 });
    const [Carantec] = useState({ lat: 48.6667, lng: -3.9167 });
  const ZOOM_LEVEL = 9.5;

  // Icône personnalisée pour le marqueur
  const MapIconIcon = new L.Icon({
    iconUrl: MapIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });


  return (

    <div className={styles.carte}>
    
       <div >
           <div onClick={() => toggleSpeakText("Carte des communes ,", 'fr-FR')}>
               <h1>Carte des communes</h1>
           </div>

            <Button 
        label ="PLUS D'INFO"
        link = '/services'
        />
        </div>
      <MapContainer className={styles.leafletcontainer} center={center} zoom={ZOOM_LEVEL}>
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />


      {/* Les marqueurs des villes */}
      <Marker position={center} icon={MapIconIcon}>
        <Popup>
        <Link to='/services'>Morlaix </Link>
        </Popup>
      </Marker>
      <Marker position={Guerlesquin} icon={MapIconIcon}>
        <Popup>
        <Link to='/services'> Guerlesquin</Link>
        </Popup>
      </Marker>
      <Marker position={Plouezoch} icon={MapIconIcon}>
        <Popup>
        <Link to='/services'> Plouezoch</Link>
        </Popup>
      </Marker>
      <Marker position={Locquirec} icon={MapIconIcon}>
        <Popup>
        <Link to='/services'> Locquirec</Link>
        </Popup>
      </Marker>
      <Marker position={Carantec} icon={MapIconIcon}>
        <Popup>
        <Link to='/services'>Carantec </Link>
        </Popup>
      </Marker>
    </MapContainer>
        <div className={styles.left}>
       
            <div className={styles.map}></div>
        </div>
       
        
    </div>
  )
}

export default Carte