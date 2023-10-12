import React from 'react';
import styles from './Carte.module.css';

const Button = ({ label, onClick }) => {
  return (
    <div className={styles.btnContainer}>
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
    </div>
  );
};

export default Button;
