import React from 'react';
import styles from './Hero.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import useSpeechSynthesis from '../../Functions/Text2speech';


const Header = () => {
    const { spokenText, speaking, toggleSpeakText } = useSpeechSynthesis(); // Use the speech utility

    return (
        <div onClick={() => toggleSpeakText("Etudier à Morlaix ,", 'fr-FR')}>
            <div className={styles.hero}>
                <h1>ETUDIER A MORLAIX</h1>
            </div>
        </div>
  );
};

export default Header;
