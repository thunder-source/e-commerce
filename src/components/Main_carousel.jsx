import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Main_carousel_api } from "../api/Main_carousel_api";

const Main_carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Main_carousel_api.map((item, arr) => {
          return (
            <SwiperSlide key={arr}>
              <img src={item.img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Main_carousel;
