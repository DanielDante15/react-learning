import React, { Component } from "react";
import image1 from '../image/imgcard.png';
import '../cartao.css';

function Cartao() {
  return (
    <div className="tela-cartao">

      <div className="cartao-msg">
        <a href="" className="titulo-cartao">Cartão NuDant</a>
        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed facilis illo itaque excepturi eveniet nisi dolorem saepe officiis veniam ut tenetur, consectetur fugit qui aspernatur unde molestias, quis veritatis dolorum. <br /><br /></span>
        <a className="link-cartao" href="">Saiba mais</a>
      </div>

      <div className="cartao-img">
        <img src={image1} alt="opaa" />
      </div>

    </div>
  );
}

export default Cartao;
