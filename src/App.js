import "./pages/Style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShapCaret from './components/AllRings/ChooseDiamondPage/ShapCaret';
import { Home } from './pages/home/Home';
// import Header from './pages/home/Header';
import { Footer } from './pages/home/Footer';
import { Routing } from './components/Routing';
import { ChooseSetting } from "./components/AllRings/ChooseSettingPage/ChooseSetting";
import Header from "./components/forntFiles/Header3";
// import Header from './components/forntFiles/Header1';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routing/>
      {/* <ShapCaret/>   */}
      {/* <ChooseSetting/> */}
      {/* <Home/>    */}
    <Footer/>
    </div>
  );
}

export default App;
