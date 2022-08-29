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

const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#ECEFF4",
  },
  "& .MuiInputBase-root": {
    color: "#ECEFF4",
    borderBottom: "none",
  },
  "& .MuiInputBase-root:before": {
    color: "#ECEFF4",
    borderBottom: "none",
  },
  "& .MuiInputBase-root:": {
    color: "#ECEFF4",
    borderBottom: "none",
  },
  "& .MuiInputBase-root-MuiInput-root:before": {
    borderBottom: "2px solid rgba(0, 0, 0, 0)",
  },
  // css-1a1fmpi-MuiInputBase-root-MuiInput-root:before

  "& .MuiInput-underline": {
    borderBottomColor: "#ECEFF4",
    borderBottom: "0.1vh solid white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#ECEFF4",
    borderBottom: "0.3vh solid white",
  },
  "& label": {
    color: "#ECEFF4",
  },
  "& label.placeholder": {
    color: "#ECEFF4",
  },
});

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
            <h1>Sua liberdade financeira está aqui.</h1>
          </div>
          <div></div>
          <div className="campoCartao">
            <h2>Peça já seu cartão NuDant</h2>
            <CustomTextField
              fullWidth
              sx={{ marginBottom: 7, marginTop: 1 }}
              helperText="Digite seu CPF"
              id="standard-multiline-static"
              placeholder="000.000.000-00"
              label="CPF"
              variant="standard"
              size="medium"
            />
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