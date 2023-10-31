import React from 'react';
import styles from './Hero.module.css';
import useSpeechSynthesis from '../../Functions/Text2speech';

const Hero = () => {
    const { spokenText, speaking, toggleSpeakText } = useSpeechSynthesis(); // Utilise la synthèse vocale
    return (
            <div onClick={() => toggleSpeakText("Bienvenue à Morlaix Communauté.", 'fr-FR')}>
                <div className={styles.hero} alt="image présentation Morlaix">
                        <h1>BIENVENUE A MORLAIX COMMUNAUTE</h1>
                </div>
            </div>
  );
};

export default Hero;
