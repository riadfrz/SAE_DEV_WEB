import React from 'react';
import styles from './Hero.module.css';
import useSpeechSynthesis from '../../Functions/Text2speech';


const Header = () => {
    const { spokenText, speaking, toggleSpeakText } = useSpeechSynthesis(); 

    return (
        <div onClick={() => toggleSpeakText("Etudier à Morlaix ,", 'fr-FR')}>
            <div className={styles.hero} alt="image étudier à Morlaix">
                <h1>ETUDIER A MORLAIX</h1>
            </div>
        </div>
  );
};

export default Header;
