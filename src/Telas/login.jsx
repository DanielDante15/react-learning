import { Paper, Typography } from "@mui/material";
import React from "react";
import "../css/login.css";
import image from "../image/logo.png";
import { TextField } from "@mui/material";
import CpfLogin from "../components/Mui_Components/cpfLogin";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {Button} from "@mui/material";
import { Link, redirect } from "react-router-dom";

function Login() {
  return (
    <div className="main">
      <div className="login-logo">
        <a className="btnLogo" href="/">
          {" "}
          <img src={image} className="logo" alt="teste" href="/" />
        </a>
      </div>

      <div className="login-content">
        <Paper
          elevation={3}
          sx={{ pl: 2, pr: 2, display: "flex", justifyContent: "center" }}
        >
          <div className="cardLogin">
            <h1 className="login-h1">Login</h1>
            <CpfLogin />
            <TextField label="Senha" variant="outlined" type={"password"} sx={{ width: 300}} />
            <FormControlLabel control={<Checkbox />} label="Lembre-se de mim"/>
            <Button variant="contained" sx={{width:300,mb:2,mt:3}}>Login</Button>
            
            <Typography sx={{mb:2}}>
                ou
            </Typography>
            <Button variant="contained" href="/cadastro" sx={{width:300}}>Cadastre-se</Button>
            
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default Login;
