
import './css/App.css';
import Navbar from './components/Pagina_Inicial/navbar';
import Slide from './components/Pagina_Inicial/slide.jsx';
import Cartao from './components/Pagina_Inicial/pedir_cartao.jsx';
import Tela2 from './components/Pagina_Inicial/beneficios.jsx';

function App() {
  return (
    <>
      <Navbar/>
      <Slide/>
      <Cartao/>
      <Tela2/>
    </>
  );
}

export default App;
