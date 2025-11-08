import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import Carousel1 from '../assets/hero-image.jpg';
import Carousel2 from '../assets/hero-image.jpg';
import Carousel3 from '../assets/hero-image.jpg';

const images = [Carousel1, Carousel2, Carousel3];

function Carousel() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-10">
        Experiências Inesquecíveis
      </h2>

      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="rounded-lg overflow-hidden shadow-2xl custom-swiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item}
              alt={`Slide ${index + 1}`}
              className="mx-auto w-[312px] h-[539px] object-cover object-center rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Carousel;
