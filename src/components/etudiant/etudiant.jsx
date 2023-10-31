import React from 'react'
import styles from './etudiant.module.css';
import etudiant from '../../images/etudiant.jpg'
import useSpeechSynthesis from '../../Functions/Text2speech';

const Etudiant = () => {
    const { spokenText, speaking, toggleSpeakText } = useSpeechSynthesis(); // Use the speech utility

  return (
    <div className={styles.driver}>
        <div className={styles.left}>
            <img src={etudiant} alt="image étudiant" />
        </div>
        <div>
            <div onClick={() => toggleSpeakText("Venez étudier à Morlaix , et découvrez un cadre de vie serein. ," +
                "Entre prépas, formations professionnalisantes et parcours universitaires, vous trouverez sûrement votre place !", 'fr-FR')}>
                <h2> Venez étudier à Morlaix <span> et découvrez un cadre de vie serein</span></h2>
            </div>
            <p>Entre prépas, formations professionnalisantes et parcours universitaires, vous trouverez sûrement votre place !</p>
            <button>En savoir plus</button>
        </div>
    </div>
  )
}

export default Etudiant