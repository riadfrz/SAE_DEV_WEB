import React from 'react';
import styles from './t2s.module.css'; // Import the CSS module
import useSpeechSynthesis from '../../Functions/Text2speech'; // Import the hook

const TextToSpeechInstructions = () => {
    const { spokenText, speaking, toggleSpeakText } = useSpeechSynthesis(); // Use the speech utility
    return (
        <div onClick={() => toggleSpeakText("Cliquez sur les titres pour activer la lecture audio du texte.", 'fr-FR')}>
            <div className={styles.instructions}>
            <p>Cliquez sur les titres pour activer la lecture audio du texte.</p>
            </div>
        </div>
    );
};

export default TextToSpeechInstructions;
