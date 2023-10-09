import React from 'react';
import styles from './Actu.module.css';

const Card = ({ image, title , text}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt='/' />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Card;
