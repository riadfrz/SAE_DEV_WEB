import React from 'react';
import styles from './Agenda.module.css';
import Card from './Card';
import imgCarteAgenda from '../../images/CarteAgenda.jpg';
import useSpeechSynthesis from '../../Functions/Text2speech';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


const Agenda = () => {
  const { spokenText, speaking, toggleSpeakText } = useSpeechSynthesis(); // Use the speech utility

  return (
    <div className={styles.agenda}>
      <div className={styles.agenda2}> 
      <div className={styles.heading}>
        <div onClick={() => toggleSpeakText("Agenda ,", 'fr-FR')}>
          <h1>Agenda</h1>
        </div>

      </div>
      <div className={styles.slider_container}>
        <Swiper

          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{    
         
            200: {
              
              slidesPerView: 1,
            },
            600: {
              
              slidesPerView: 2,
            },
            768: {

              slidesPerView: 3,
            },

            1040: {

              slidesPerView: 5,
            },
          }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              date = '27/10'
              make='article 1'
              link='/services'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              date = '25/10'
              make='article 2'
              link='/services'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              date = '22/10'
              make='article 3'
              link='/services'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              date = '19/10'
              make='article 4'
              link='/services'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
             image={imgCarteAgenda}
             date = '05/10'
             make='article 5'
             link='/services'
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              date = '19/09'
              make='article 6'
              link='/services'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              date = '12/09'
              make='article 7'
              link='/services'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              date = '10/09'
              make='article 8'
              link='/services'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              date = '09/09'
              make='article 9'
              link='/services'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              date = '05/09'
              make='article 10'
              link='/services'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              date = '04/09'
              make='article 11'
              link='/services'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              date = '01/09'
              make='article 12'
              link='/services'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              date = '30/08'
              make='article 13'
              link='/services'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              date = '23/08'
              make='article 14'
              link='/services'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              date = '21/08'
              make='article 15'
              link='/services'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              date = '19/07'
              make='article 16'
              link='/services'
            />
          </SwiperSlide>
          
        </Swiper>
      </div>
      </div>
    </div>
  );
};

export default Agenda;
