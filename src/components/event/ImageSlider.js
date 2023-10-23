import React, { useState } from 'react';
import { SliderData } from './SliderData';
import styles from './ImageSlider.module.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import useSpeechSynthesis from '../../Functions/Text2speech';


const ImageSlider = ({ slides }) => {
    const { spokenText, speaking, toggleSpeakText } = useSpeechSynthesis(); // Use the speech utility

    const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

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
        
    <section className={styles.slider}>

      <FaArrowAltCircleLeft className={styles.leftarrow} onClick={prevSlide} />
      
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? styles.slideActive : styles.slide}
            key={index}
          >
            {index === current && (
              <img src={slide.image} className={styles.image}  />
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
