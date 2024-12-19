import React, { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

const Carousel = ({ movies }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const heroItems = movies?.map((movie) => (
    <SwiperSlide key={movie.id} className="relative  z-index: 10;">
      <img
        src={`${import.meta.env.VITE_IMAGE_URL}${movie.backdrop_path}`}
        alt={movie?.titel}
      />
      <div className="absolute  bottom-[28px] text-white flex flex-col items-center justify-center gap-4 w-full bg-gradient-to-t from-black/80 via-black/60 to-transparent py-6 px-4 rounded-lg">
        <h2 className="text-[32px] font-semibold leading-tight text-center drop-shadow-md">
          {movie.title}
        </h2>
        <p className="text-sm leading-5 text-gray-300 drop-shadow-sm">
          Release Date: {movie.release_date}
        </p>
        <span className="text-sm leading-5 text-yellow-400 drop-shadow-sm">
          Rating: {movie.vote_average} ⭐
        </span>
        <button className="bg-white text-primary py-3 px-8 rounded-lg text-[16px] font-medium shadow-lg hover:bg-primary hover:text-white transition duration-300">
         See
        </button>
      </div>
    </SwiperSlide>
  ));

  const heroItems2 = movies?.map((movie) => (
    <SwiperSlide key={movie.id} className="relative">
      <img  className=""
        src={`${import.meta.env.VITE_IMAGE_URL}${movie.backdrop_path}`}
        alt={movie?.title}
      />
    </SwiperSlide>
  ));

  return (
    <div className=" mb-10">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="container mySwiper2 h-screen"
      >
        {heroItems}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        navigation={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="container mySwiper "
      >
        {heroItems2}
      </Swiper>
    </div>
  );
};

export default memo(Carousel);
