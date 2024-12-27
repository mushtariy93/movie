import React, { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

const Hero = ({ movies }) => {
  const { t } = useTranslation();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const heroItems1 = movies?.map((movie) => (
    <SwiperSlide key={movie.id} className=" relative">
      <img
        src={`${import.meta.env.VITE_IMAGE_URL}${movie.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="absolute left-0 bottom-7 text-white flex flex-col items-start justify-center gap-3 w-full px-4 sm:px-6 md:px-8 bg-black py-4 rounded-tl-lg">
        <h2 className="text-3xl font-semibold leading-tight max-[500px]:text-xl">
          {movie.title}
        </h2>
        <p className="text-sm leading-5">{movie.release_date}</p>
        <div className="flex items-center gap-1 text-sm max-[500px]:text-xs">
          <svg
            className="w-4 h-4 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12 17.272l-5.182 2.725 1.105-6.472L2.36 9.028l6.48-.944L12 2l2.159 5.084 6.48.944-4.563 4.547 1.105 6.472L12 17.272z"
            />
          </svg>
          <span>{movie.vote_average}</span>
        </div>
        <button className="bg-white text-primary py-3 px-16 rounded-lg text-lg font-medium max-[550px]:py-2 max-[550px]:px-12 max-[450px]:px-10 hover:bg-primary hover:text-white transition-colors duration-300">
          {t("hero.watch")}
        </button>
      </div>
    </SwiperSlide>
  ));
  const heroItems2 = movies?.map((movie) => (
    <SwiperSlide key={movie.id} className=" relative">
      <img
        src={`${import.meta.env.VITE_IMAGE_URL}${movie.backdrop_path}`}
        alt={movie?.title}
      />
    </SwiperSlide>
  ));
  return (
    <div className=" dark:bg-black">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        // loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2 container h-screen"
      >
        {heroItems1}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        navigation={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper container mt-4"
      >
        {heroItems2}
      </Swiper>
    </div>
  );
};

export default memo(Hero);
