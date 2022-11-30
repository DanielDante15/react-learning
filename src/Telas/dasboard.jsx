import DashBoardView from "../components/Mui_Components/appBar";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useState, useEffect } from "react";
import axios from 'axios'
import "../css/dashboard.css";



export default function DashBoard() {

  const [dados, setDados] = useState("")


  const api = () =>{
    axios.get("http://127.0.0.1:8000/clientes/1/", {headers: {'X-Requested-With': 'XMLHttpRequest'},})
    .then((res) => {
      setDados(res.data)
      console.log(dados)
    })
  }




  return (
    <>
      <DashBoardView />
      <div className="dash-main">

        <div className="dash-menu">
          <Sidebar width="250">
            <Menu>
              <SubMenu label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
              </SubMenu>
              <MenuItem> Documentation </MenuItem>
              <SubMenu label="Charts">
                <MenuItem> Line charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
              </SubMenu>
              <SubMenu label="Charts">
                <MenuItem> Line charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
              </SubMenu>
            </Menu>
          </Sidebar>
        </div>



        <div className="dash-userView">

          <button onClick={api}>clica porra</button>
          <h1>{dados.nome} - {dados.email}</h1>
          



        </div>
      </div>
    </>
  )
}
