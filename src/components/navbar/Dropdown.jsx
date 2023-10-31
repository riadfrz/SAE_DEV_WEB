import React, { useState, useRef } from 'react';
import './Dropdown.css'; 
import { Link } from 'react-router-dom'; 

function Dropdown({ dropdownContent }) {
  const [click] = useState(false); //suit l'état d'ouverture ou de fermeture du menu .
  const dropdownRef = useRef(null); // Référence à l'élément du menu déroulant.

  return (
    <div ref={dropdownRef} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
      {/* map pour créer un élément de menu pour chaque élément dans dropdownContent. */}
      {dropdownContent.map((item, index) => (
        <Link className={item.cName} to={item.path} style={{textDecoration: 'none'}} key={index}>
          <div className='wrapper2'> 
            <li>
              <p> {item.title}</p> {/* Affiche le titre de l'élément du menu déroulant. */}
            </li>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Dropdown; 
