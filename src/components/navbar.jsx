import React, { Component } from "react";
import "../css/navbar.css";
import image from "../image/logo.png";
import PositionedMenu from "./Mui_Components/menuBurguer";
function Navbar() {
  return (
    <>
      <nav className="navbar">

      <a className="btnLogo" href=""> <img src={image}  className="logo" alt="teste" href="" /></a>
      
        <div className="navOptions">
            <a href="">Home</a>
            <a href="">Para você</a>
            <a href="">Empresas</a>
            <a href="">O NuDant</a>
            <a href="">Ajuda</a>
            
        </div>
          <div className="menu-burguer">
              <PositionedMenu/>
          </div>
            <a href="" className="btn-cartao"> Login</a>
      </nav>
    </>
  );
}

export default Navbar;
