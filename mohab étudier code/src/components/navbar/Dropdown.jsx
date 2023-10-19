import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown({ dropdownContent }) {
  const [click, setClick] = useState(false);
  const dropdownRef = useRef(null);


  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setClick(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
      {dropdownContent.map((item, index) => (
        <Link className={item.cName} to={item.path} style={{textDecoration: 'none'}} key={index}>
          <div className='wrapper2'> 
        <li>
          <p> {item.title}</p>
        </li>
        </div>
      </Link>
      ))}
    </div>
  );
}

export default Dropdown;
