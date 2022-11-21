import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { TextField } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../css/slide.css";
import BtnInstall from "../Mui_Components/btn";
import Example from "../Mui_Components/CpfInput";

function Slide() {
  return (
    <>
      <div className="tela1">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide01"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide02"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide03"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide04"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide05"></div>
          </SwiperSlide>
        </Swiper>
        <div className="baixarapp">

          <BtnInstall></BtnInstall>
        </div>

        <div className="campoMsg">
          <div>
            <h1 className="slide-h1">Sua liberdade financeira está aqui.</h1>
          </div>
          <div></div>
          <div className="campoCartao">
            <h2>Peça já seu cartão NuDant</h2>
            <Example/>
            <a href="" className="btn-continuar">
              Continuar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slide;
