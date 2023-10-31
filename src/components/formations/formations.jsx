import React from 'react'
import styles from './Actu.module.css'
import imgCarte1 from '../../images/enseignement.jpg';
import imgCarte2 from '../../images/pro.png';
import imgCarte3 from '../../images/prepa.jpg';
import Card from './Card';
import Button from './Button';
import useSpeechSynthesis from '../../Functions/Text2speech';
const Formations = () => {
    const { spokenText, speaking, toggleSpeakText } = useSpeechSynthesis(); 
  return (
    <div className={styles.actu}>
        <div className={styles.heading}>
            <div onClick={() => toggleSpeakText("Etablissements et formations ,", 'fr-FR')}>
                <h1>Etablissements et formations</h1>
            </div>
            <div className={styles.text_bg}></div>
        </div>

      <div className={styles.container}>
      <Card
              image={imgCarte1}
              title=' Le campus voit une progression constante de ses effectifs, symbole d`une réelle dynamique de l`enseignement supérieur.'
              text='Le campus de Morlaix compte près de 750 étudiants sur 5 établissements, avec des formations allant du BTS au Master 2'
              link='/services'
              alt='Carte présentation'
            />
      <Card
              image={imgCarte2}
              title='Retrouvez des formations professionnalisantes...'
              text='En savoir plus sur les professions concernées...'
              link='/services'
              alt='Carte formation pro'
            />
       <Card
              image={imgCarte3}
              title='Découvrez les classes préparatoires aux grandes écoles (CPGE) à Morlaix'
              text='Préparez vos concours d`admission tout en restant dans votre ville...'
              link='/services'
              alt='Carte classe prépa'
            />
       
        </div>
        <Button 
        label ='VOIR PLUS'
        link='/services'
        />
        </div>
    
  )
}

export default Formations