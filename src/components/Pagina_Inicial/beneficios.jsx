import React, { Component } from "react";
import "../../css/tela2.css";
import imagem2 from "../../image/img_viagem.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { Pagination } from "swiper";

import Card1 from "../cards/card1";
import Card2 from "../cards/card2";
import foto from "../../image/ftinha.jpg"




function Tela2() {
  return (
    <div className="principal">
      <div className="card1">
        <Card2 titulo="NuDant Trips" size={280}img ={imagem2} desc="Acumule pontos, ganhe viagens e descontos em muitos outros produtos" msg_btn = "Quero ser NuDant"/>
      </div>

      <div className="heros">
        <Swiper
          navigation={true}
          slidesPerView={1}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
             
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper1">
          <SwiperSlide>
            <div className="slide1"><Card1 titulo="Lizard" descritivo="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed mag" foto={foto}/></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide2"><Card1 titulo="Lizard" descritivo="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed mag" foto={foto}/></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide3"><Card1 titulo="Lizard" descritivo="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed mag" foto={foto}/></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide4"><Card1 titulo="Lizard" descritivo="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed mag" foto={foto}/></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide4"><Card1 titulo="Lizard" descritivo="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed mag" foto={foto}/></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

  );
}

export default Tela2;
