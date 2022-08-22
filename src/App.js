
import './css/App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Slide from './components/slide';
import Cartao from './components/pedir_cartao';
import Tela2 from './components/beneficios';
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
