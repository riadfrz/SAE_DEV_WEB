import React from 'react'
import styles from './etudiant.module.css';
import Drive from '../../../mohab étudier code/src/images/etudiant.jpg'

const Etudiant = () => {
  return (
    <div className={styles.driver}>
        <div className={styles.left}>
            <img src={Drive} alt="/" />
        </div>
        <div>
            <h2> Venez étudier à Morlaix <span> et découvrer un cadre de vie serein</span></h2>
            <p>Entre prépas, formations professionnalisantes et parcours universitaires, vous trouverez sûrement votre place !</p>
            <button>En savoir plus</button>
        </div>
    </div>
  )
}

export default Etudiant