import { Paper, Typography } from "@mui/material";
import React from "react";
import "../css/login.css";
import image from "../image/logo.png";
import { TextField } from "@mui/material";
import CpfLogin from "../components/Mui_Components/cpfLogin";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "@mui/material";
import axios from 'axios'

function Login() {
  const [senha, setSenha] = React.useState('')
  const [cpf, setCpf] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const values = { cpf, senha }
    // alert(JSON.stringify(values, null, 2))
 
    axios.post("http://127.0.0.1:8000/clientes/", values , {headers: {'X-Requested-With': 'XMLHttpRequest'},})
      .then((res) => {
        console.log(res.data)
      })
  }
  
  return (
    <div className="main">
      <div className="login-logo">
        <a className="btnLogo" href="/">
          <img src={image} className="logo" alt="teste" href="/" />
        </a>
      </div>

      <div className="login-content">
        <form onSubmit={handleSubmit}>
          <Paper
            elevation={3}
            sx={{ pl: 2, pr: 2, display: "flex", justifyContent: "center" }}
          >
            <div className="cardLogin">
              <h1 className="login-h1">Login</h1>
              <CpfLogin cpf={cpf} setCpf={setCpf} />
              <TextField value={senha} onChange={(e) => setSenha(e.target.value)} label="Senha" variant="outlined" type={"password"} sx={{ width: 300 }} />
              <FormControlLabel control={<Checkbox />} label="Lembre-se de mim" />
              <Button type="submit" variant="contained" sx={{ width: 300, mb: 2, mt: 3 }}>Login</Button>

              <Typography sx={{ mb: 2 }}>
                ou
              </Typography>
              <Button variant="contained" href="/cadastro" sx={{ width: 300 }}>Cadastre-se</Button>

            </div>
          </Paper>
        </form>
      </div>
    </div>
  );
}

export default Login;
