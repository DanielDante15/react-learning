
import './css/App.css';
import Pagina_Inicial from './Telas/paginaInicial';
import Login from './Telas/login';
import Cadastro from './Telas/cadastro';
import {Route,BrowserRouter,Routes,Outlet} from 'react-router-dom'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Pagina_Inicial/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
    </Routes>
    </BrowserRouter>
    <Outlet/>
    </>
  );
}

