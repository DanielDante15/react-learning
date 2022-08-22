import React, { Component } from "react";
import "../css/tela2.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { Pagination } from "swiper";

import Card1 from "./cards/card1";
import Card2 from "./cards/card2";
import Card3 from "./cards/card3";
import Card4 from "./cards/card4";
import Card5 from "./cards/card5";


function Tela2() {
  return (
    <div className="principal">
      <div className="card1">
        <Card2/>
      </div>

      <div className="heros">
        <Swiper
          navigation={true}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper1">
          <SwiperSlide>
            <div className="slide1"><Card1/></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide2"><Card3/></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide3"><Card4/></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide4"><Card5/></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide4"><Card5/></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

  );
}

export default Tela2;
