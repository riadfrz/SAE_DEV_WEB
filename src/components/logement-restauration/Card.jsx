import React from 'react';
import styles from './logement-restauration.module.css';
import { Link } from 'react-router-dom';
const Card = ({ image, make, link}) => {
  return (
    <div className={styles.card}>
      <Link to={link} style={{textDecoration: 'none'} }> 
      <img src={image} alt='/' />
      <p>{make}</p>
      </Link>
    </div>
  );
};

export default Card;

