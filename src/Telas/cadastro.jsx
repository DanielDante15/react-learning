import { Paper, Typography } from "@mui/material";
import React from "react";
import "../css/cadastro.css";
import image from "../image/logo.png";
import { TextField } from "@mui/material";
import CpfLogin from "../components/Mui_Components/cpfLogin";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {Button} from "@mui/material";

function Cadastro() {
  return (
    <div className="main">
      <div className="login-logo">
        <a className="btnLogo" href="/">
          {" "}
          <img src={image} className="logo" alt="teste" href="/" />
        </a>
      </div>

      <div className="cad-content">
        <Paper
          elevation={3}
          sx={{ pl: 2, pr: 2, display: "flex", justifyContent: "center" }}
        >
          <div className="cardCadastro">
            <h1 className="login-h1">Cadastro NuDant</h1>
            <CpfLogin />
            <TextField label="E-mail" variant="outlined" type={"email"} sx={{ width: 300,mt:3 }} />
            <TextField label="Senha" variant="outlined" type={"password"} sx={{ width: 300,mt:3 }} />
            <TextField label="Confirmar Senha" variant="outlined" type={"password"} sx={{ width: 300,mt:3 }} />
            <Button variant="contained" sx={{width:300,mb:2,mt:3}}>Cadastrar</Button>
            
            <Typography sx={{mb:2}}>
                Já possui conta?
            </Typography>
            <Button variant="contained" href="/login" sx={{width:300}}>Fazer login</Button>
            
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default Cadastro;
