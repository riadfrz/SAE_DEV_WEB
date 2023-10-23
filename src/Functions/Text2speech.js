
import React, { useState } from 'react';

const useSpeechSynthesis = () => {
    const [spokenText, setSpokenText] = useState('');
    const [speaking, setSpeaking] = useState(false);
    const speechSynthesis = window.speechSynthesis;
    let currentUtterance = null;

    const toggleSpeakText = (text, lang) => {
        if (speaking) {
            speechSynthesis.cancel();
            setSpeaking(false);
        } else {
            currentUtterance = new SpeechSynthesisUtterance(text);
            currentUtterance.lang = lang;
            currentUtterance.onend = () => {
                setSpeaking(false);
            };

            speechSynthesis.speak(currentUtterance);
            setSpeaking(true);
        }
            /*speechSynthesis.speak(currentUtterance);
            setSpeaking(true);*/

    };

    return {
        spokenText,
        speaking,
        toggleSpeakText,
    };
};

export default useSpeechSynthesis;
