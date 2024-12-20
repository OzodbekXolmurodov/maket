import React from "react";
import "swiper/scss";
import "./Corusel.scss";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import rasim from "../../assets/Group 13.svg";
import rasim2 from "../../assets/Group 164.svg";

const Carusel = () => {
  return (
    <>
      <div className="conteaner2 corusel">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <img className="corusel__img" src={rasim} alt="" />
            <img className="corusel__media" src={rasim2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="corusel__img" src={rasim} alt="" />
            <img className="corusel__media" src={rasim2} alt="" />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img className="corusel__img" src={rasim} alt="" />
            <img className="corusel__media" src={rasim2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carusel;
