import React from 'react';
import styles from './Actu.module.css';
import { Link } from 'react-router-dom';
const Card = ({ image, title , text, link}) => {
  return (
    <div className={styles.card}>
      <Link to={link} style={{textDecoration: 'none'} }> 
     
      <img src={image} alt='/' />
      <h3>{title}</h3>
      <p>{text}</p>
      </Link>
    </div>
  );
};

export default Card;
