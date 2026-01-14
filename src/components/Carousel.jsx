import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

import Carousel1 from "../assets/hero-image.jpg";
import Carousel2 from "../assets/DSCN3096.JPG";
import Carousel3 from "../assets/DSCN3007.JPG";

const images = [
  Carousel1,
  Carousel2,
  Carousel3,
  Carousel1,
  Carousel2,
  Carousel3,
];

function Carousel() {
  const { t } = useTranslation();

  return (
    <section className="w-full max-w-[1400px] mx-auto py-12 px-2">
      <h2 className="text-5xl md:text-4xl font-semibold text-center text-white mb-10">
        {t("carousel.title")}
      </h2>

      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        spaceBetween={12}
        autoHeight
        centeredSlides={false}
        slidesOffsetBefore={0}
        slidesOffsetAfter={0}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3   },
        }}
        className="custom-swiper w-full !px-0 !h-auto"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-full px-1">
              <div
                className="
                  w-full
                  aspect-[4/5]
                  max-h-[560px]
                  mx-auto
                  overflow-hidden
                  rounded-xl
                  shadow-xl
                  transition-all duration-300
                  hover:scale-[1.05]
                "
              >
                <img
                  src={item}
                  alt={`${t("carousel.slideAlt")} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Carousel;
