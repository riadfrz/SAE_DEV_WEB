
import React, { useState } from 'react';

// Crée un hook personnalisé pour la synthèse vocale
const useSpeechSynthesis = () => {
    // État pour stocker le texte à synthétiser
    const [spokenText, setSpokenText] = useState('');
    // État pour suivre si la synthèse vocale est en cours
    const [speaking, setSpeaking] = useState(false);
    // Récupération de l'objet speechSynthesis du navigateur
    const speechSynthesis = window.speechSynthesis;
    // Initialise une variable pour l'instance d'utterance actuelle
    let currentUtterance = null;

    // Fonction pour activer ou désactiver la synthèse vocale avec un texte donné et une langue spécifiée
    const toggleSpeakText = (text, lang) => {
        if (speaking) {
            // Si la synthèse vocale est en cours, annule la synthèse et met à jour l'état
            speechSynthesis.cancel();
            setSpeaking(false);
        } else {
            // Crée une nouvelle instance d'utterance avec le texte et la langue spécifiés
            currentUtterance = new SpeechSynthesisUtterance(text);
            currentUtterance.lang = lang;
            // Configure une fonction de rappel pour gérer la fin de la synthèse
            currentUtterance.onend = () => {
                setSpeaking(false);
            };
            // Démarre la synthèse vocale avec l'utterance actuelle et met à jour l'état
            speechSynthesis.speak(currentUtterance);
            setSpeaking(true);
        }
    };

    // Retourne les états et la fonction de synthèse vocale
    return {
        spokenText,
        speaking,
        toggleSpeakText,
    };
};
// Exporte le hook personnalisé pour une utilisation dans d'autres composants React
export default useSpeechSynthesis;
