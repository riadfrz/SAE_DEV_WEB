import React, { useState } from 'react';
import { SliderData } from './SliderData';
import styles from './ImageSlider.module.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import useSpeechSynthesis from '../../Functions/Text2speech';


const ImageSlider = ({ slides }) => {
    const { spokenText, speaking, toggleSpeakText } = useSpeechSynthesis(); 

    // suit l'index de l'image actuelle dans le tableau des diapositives
    const [current, setCurrent] = useState(0);
    const length = slides.length;


  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // Fonction pour revenir à la diapositive précédente
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className={styles.event}>
        <div className={styles.heading}>
            <div onClick={() => toggleSpeakText("Évènements ,", 'fr-FR')}>
                <h1>Évènements</h1>
            </div>
            <div className={styles.text_bg}>
            </div>

        </div>
    {/* Carrousel d'images */}
    <section className={styles.slider}>

      <FaArrowAltCircleLeft className={styles.leftarrow} onClick={prevSlide} />
      {/* parcourt chaque élément du tableau SliderData qui stocke les images des événements */}
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? styles.slideActive : styles.slide}
            key={index}
          >
             {/* Affichage de l'image si elle correspond à l'index actuel */}
            {index === current && (
              <img src={slide.image} className={styles.image} alt='affiche événement' />
            )}
           
          </div>
        );

      }
      
  )} <FaArrowAltCircleRight className={styles.rightarrow} onClick={nextSlide} />
    </section>
    </div>
  )
}

export default ImageSlider;
