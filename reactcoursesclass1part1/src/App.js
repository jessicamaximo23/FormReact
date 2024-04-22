
//Lembrar de acrescentar os imports de cada component que eu criei
import './App.css';
import Navbar from './components/Navbar';
import ButtonGroup from './components/ButtonsGroup';
import ImageComp from './components/ImageComp';

//Criar a funcao do app e passar os componentes que vc quer
function App() {
  return (
    <div className="App">
      <Navbar />
      <ButtonGroup />
      <ImageComp />      
    </div>
  );
}

//Precisa exportar
export default App;

//Ir em cada componente .js e colocar a funcao que vc quer
//e as caracteristicas+
