import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

import Carousel1 from "../assets/hero-image.JPG";
import Carousel2 from "../assets/DSCN3096.JPG";
import Carousel3 from "../assets/DSCN3007.JPG";

const images = [Carousel1, Carousel2, Carousel3, Carousel1, Carousel2, Carousel3];

function Carousel() {
  const { t } = useTranslation();

  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        {t("carousel.title")}
      </h2>

      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="custom-swiper rounded-lg shadow-2xl"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={item}
              alt={`${t("carousel.slideAlt")} ${index + 1}`}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Carousel;