import React from 'react';
import styles from './logement-restauration.module.css';
import Card from './Card';
import imgCarteAgenda from '../../../mohab étudier code/src/images/cafet.jpg';
import imgCarteAgenda2 from '../../../mohab étudier code/src/images/Ty Dour.png';
import imgCarteAgenda3 from '../../../mohab étudier code/src/images/auberge.jpg';
import imgCarteAgenda4 from '../../../mohab étudier code/src/images/Menguen.png';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


const LogementRestauration = () => {
  return (
    <div className={styles.agenda}>
      <div className={styles.agenda2}>
      <div className={styles.heading}>
        <h1>Logement et restauration</h1>

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
                make='cafétéria étudiante'
                link='/services'
            />
          </SwiperSlide>
            <SwiperSlide>
          <Card
              image={imgCarteAgenda2}
              make='studios étudiants'
              link='/services'
          />
        </SwiperSlide>
            <SwiperSlide>
          <Card
              image={imgCarteAgenda3}
              make='Au pied du sentier des douaniers (GR34)'
              link='/services'
          />
        </SwiperSlide>          <SwiperSlide>
          <Card
              image={imgCarteAgenda4}
              make='studios de 19 à 22m²'
              link='/services'
          />
        </SwiperSlide>
            <SwiperSlide>
                <Card
                    image={imgCarteAgenda}
                    make='cafétéria étudiante'
                    link='/services'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    image={imgCarteAgenda}
                    make='cafétéria étudiante'
                    link='/services'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    image={imgCarteAgenda}
                    make='cafétéria étudiante'
                    link='/services'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    image={imgCarteAgenda}
                    make='cafétéria étudiante'
                    link='/services'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    image={imgCarteAgenda}
                    make='cafétéria étudiante'
                    link='/services'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    image={imgCarteAgenda}
                    make='cafétéria étudiante'
                    link='/services'
                />
            </SwiperSlide>
          
        </Swiper>
      </div>
      </div>
    </div>
  );
};

export default LogementRestauration;
