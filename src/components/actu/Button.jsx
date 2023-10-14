import React from 'react';
import styles from './Actu.module.css';
import { Link } from 'react-router-dom';
const Button = ({ label, onClick ,link }) => {
  return (
    <div className={styles.btnContainer}>
       <Link to={link} style={{textDecoration: 'none'} }> 
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
    </Link>
    </div>
  );
};

export default Button;
