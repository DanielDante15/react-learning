import React, { Component } from "react";
import image1 from "../image/imgcard.png";
import image2 from "../image/imgcard2.png";
import "../css/cartao.css";
import { BsArrowRight } from "react-icons/bs";
import Card2 from "../components/cards/card2";
import CardDark2 from "./cards/card_dark2";

function Cartao() {
  return (
    <div>
      <div className="tela-cartao">
        <div className="cartao-msg">
          <a href="" className="titulo-cartao">
            Cartão NuDant
          </a>
          <span className="msg-cartao">
            Lorem, ipsum dolor sit a officiis veniam ut tenetur, consectetur
            fugit qui aspernatur unde molestias, quis veritatis dolorum. <br />
            <br />
          </span>
          <a className="link-cartao" href="">
            Saiba mais <BsArrowRight size={14} />{" "}
          </a>
        </div>
        <div className="cartao-img">
          <img src={image1} alt="" />
        </div>
        <div className="cartao-img2">
          <CardDark2 size={280} titulo="Cartão NuDant "img={image1} desc="Lorem, ipsum dolor sit a officiis veniam ut tenetur, consectetur
            fugit qui aspernatur unde molestias, quis veritatis dolorum." msg_btn="Pedir Cartão"/>
        </div>
      </div>
      <div className="waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
          <path
            fill="#4C566A"
            fill-opacity="1"
            d="M0,128L80,112C160,96,320,64,480,69.3C640,75,800,117,960,133.3C1120,149,1280,139,1360,133.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Cartao;
