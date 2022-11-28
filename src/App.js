
import './css/App.css';
import Pagina_Inicial from './Telas/paginaInicial';
import Login from './Telas/login';
import Cadastro from './Telas/cadastro';
import {Route,BrowserRouter,Routes,Outlet} from 'react-router-dom'
import DashBoard from './Telas/dasboard';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Pagina_Inicial/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
      <Route path='/dashboard' element={<DashBoard/>}/>

    </Routes>
    </BrowserRouter>
    <Outlet/>
    </>
  );
}

