import './App.css';
import ShapCaret from './components/AllRings/ChooseDiamondPage/ShapCaret';
import { Home } from './pages/home/Home';
// import { Header } from './components/forntFiles/Header';
import Header from './pages/home/Header';

import { Routing } from './Routing';
import { Footer } from './pages/home/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Routing/>       */}
      {/* <ShapCaret/> */}  
      <Home/>   
    <Footer/>
    </div>
  );
}

export default App;
