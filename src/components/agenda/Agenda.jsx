import React from 'react';
import styles from './Agenda.module.css';
import Card from './Card';
import imgCarteAgenda from '../../images/CarteAgenda.jpg';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


const Agenda = () => {
  return (
    <div className={styles.agenda}>
      <div className={styles.agenda2}> 
      <div className={styles.heading}>
        <h1>Agenda</h1>
       
      </div>
      <div className={styles.slider_container}>
        <Swiper

          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{    
         
            400: {
              
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
              make='test'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              make='test'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              make='test'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              make='test'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
             image={imgCarteAgenda}
             make='test'
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              make='test'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              make='test'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              make='test'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              make='test'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              make='test'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              make='test'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              make='test'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              make='test'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              make='test'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              make='test'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={imgCarteAgenda}
              make='test'
            />
          </SwiperSlide>
          
        </Swiper>
      </div>
      </div>
    </div>
  );
};

export default Agenda;
