import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export const ImageSlider: React.FC = () => {
  const slides = [
    { id: 1, image: './src/assets/images/image1.png', alt: 'Candidate 1' },
    { id: 2, image: './src/assets/images/pic1.png', alt: 'Candidate 2' },
    { id: 3, image: './src/assets/images/image1.png', alt: 'Candidate 3' },
    { id: 4, image: './src/assets/images/pic1.png', alt: 'Candidate 4' },
    { id: 5, image: './src/assets/images/image1.png', alt: 'Candidate 5' },
  ];

  return (
    <section className="main-image">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <img 
                className="candidate-img" 
                src={slide.image} 
                alt={slide.alt}
              />

              <div className="slide-info">
                <h3>Candidate {slide.id}</h3>
                <p>Some information about the candidate</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};