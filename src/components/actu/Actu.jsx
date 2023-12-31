import React from 'react'
import styles from './Actu.module.css'
import imgCarte1 from '../../images/CarteActu1.png';
import imgCarte2 from '../../images/CarteActu2.png';
import imgCarte3 from '../../images/CarteActu3.png';
import Card from './Card';
import Button from'./Button';

import useSpeechSynthesis from "../../Functions/Text2speech"

const Actu = () => {
    const { spokenText, speaking, toggleSpeakText } = useSpeechSynthesis(); // Utilise la synthèse vocale

  return (
    <div className={styles.actu}>
        <div className={styles.heading}>
            <div onClick={() => toggleSpeakText("Découvrez l'actualité ,", 'fr-FR')}>
                <h1>Découvrez l'actualité</h1>
            </div>
            <div className={styles.text_bg}></div>
        </div>
        <div className={styles.heading}>
        </div>

      <div className={styles.container}>
       {/*  Utilisation du composant Card */}
      <Card
              image={imgCarte1}
              title=' Journal Grands Projets #01 : l ouverture de la rivière de Morlaix'
              text='Avec son nouveau journal Grands Projets, Morlaix Communauté informe les habitants au plus près...'
              link='/services'
              alt='Carte 1'
            />
      <Card
              image={imgCarte2}
              title='Prime achat Vélo à Assistance Electrique (VAE) 2023'
              text='Achetez un vélo électrique, en 2023, Morlaix Communauté vous accompagne !'
              link='/services'
              alt='Carte 2'
            />
       <Card 
              image={imgCarte3}
              title='Le défi des foyers presque zéro déchet : prêt à relever le défi ?'
              text='La nouvelle session du défi des foyers presque zéro déchet approche...'
              link='/services'
              alt='Carte 3'
            />
       
        </div>
        <Button 
        label ='VOIR PLUS'
        link='/services'
        />
        </div>
    
  )
}

export default Actu