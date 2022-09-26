
import '../css/App.css';
import Navbar from '../components/Pagina_Inicial/navbar';
import Slide from '../components/Pagina_Inicial/slide';
import Cartao from '../components/Pagina_Inicial/pedir_cartao';
import Tela2 from '../components/Pagina_Inicial/beneficios';



export default function Pagina_Inicial() {
  return (
    <>
      <Navbar/>
      <Slide/>
      <Cartao/>
      <Tela2/>
    </>
  );
}