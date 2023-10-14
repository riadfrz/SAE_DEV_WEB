import React from 'react';
import styles from './Agenda.module.css';
import { Link } from 'react-router-dom';
const Card = ({ image, date , make, link}) => {
  return (
    <div className={styles.card}>
      <Link to={link} style={{textDecoration: 'none'} }> 
      <img src={image} alt='/' />
      <h3>{date}</h3>
      <p>{make}</p>
      </Link>
    </div>
  );
};

export default Card;

