/*
import React, { useState } from 'react';

const [spokenText, setSpokenText] = useState('');
const [speaking, setSpeaking] = useState(false); // Track if speech is currently in progress
const speechSynthesis = window.speechSynthesis;
let currentUtterance = null; // Store the current utterance

function toggleSpeakText(text, lang) => {
    if (speaking) {
        // If speech is already in progress, stop it
        speechSynthesis.cancel();
        setSpeaking(false);
    } else {
        // Start speaking the text
        currentUtterance = new SpeechSynthesisUtterance(text);
        currentUtterance.lang = lang; // Set the language
        speechSynthesis.speak(currentUtterance);
        setSpeaking(true);
    }
};

export default function toggleSpeakText();*/


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
