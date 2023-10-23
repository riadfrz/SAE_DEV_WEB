import React from 'react';
import styles from './Hero.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import useSpeechSynthesis from '../../Functions/Text2speech';

const Hero = () => {
    const { spokenText, speaking, toggleSpeakText } = useSpeechSynthesis(); // Use the speech utility

    return (
            <div onClick={() => toggleSpeakText("Bienvenue à Morlaix Communauté.", 'fr-FR')}>
                <div className={styles.hero}>
                        <h1>BIENVENUE A MORLAIX COMMUNAUTE</h1>
                </div>
            </div>
  );
};

export default Hero;
