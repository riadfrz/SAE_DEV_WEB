import React, { useState } from "react";
import styles from './Carte.module.css';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MapIcon from '../../images/placeholder.png';
import Button from'./Button';
const Carte = () => {
  const [center] = useState({ lat: 48.5797, lng: -3.83332 });
  const ZOOM_LEVEL = 10.5;

  // Custom icon for the marker
  const MapIconIcon = new L.Icon({
    iconUrl: MapIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });


  return (

    <div className={styles.carte}>
    
       <div >
            <h1>Carte des communes</h1>
            
            <Button 
        label ="PLUS D'INFO"
        />
        </div>
      <MapContainer className={styles.leafletcontainer} center={center} zoom={ZOOM_LEVEL}>
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />


      {/* Marker with a custom icon */}
      <Marker position={center} icon={MapIconIcon}>
        <Popup>
          Morlaix
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