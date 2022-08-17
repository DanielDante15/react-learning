import React, { Component } from "react";
import "../navbar.css";
import image from "../image/logo.png";
function Navbar() {
  return (
    <>
      <nav className="navbar">
      <a className="btnLogo" href=""> <img src={image}  className="logo" alt="teste" href=""/></a>
        <div className="navOptions">
            <a href="">Home</a>
            <a href="">Para você</a>
            <a href="">Empresas</a>
            <a href="">O NuDant</a>
            <a href="">Ajuda</a>
        </div>
            <a href="" className="btn-cartao"> Login</a>
      </nav>
    </>
  );
}

export default Navbar;
