import "./pages/Style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShapCaret from './components/AllRings/ChooseDiamondPage/ShapCaret';
import { Home } from './pages/home/Home';
import { Footer } from './pages/home/Footer';
import { Routing } from './components/Routing';
import { ChooseSetting } from "./components/AllRings/ChooseSettingPage/ChooseSetting";
import Header from "./components/forntFiles/Header3";
import ShopByStyle from "./components/AllRings/ChooseSettingPage/ShopByStyle";
import MoreFilters from "./components/AllRings/ChooseSettingPage/MoreFilters";
import ExApiShopStyle from "./components/AllRings/ChooseSettingPage/ExApiShopStyle";

function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <Routing/>
      {/* <ShapCaret/>   */}
      {/* <ChooseSetting/> */}
      {/* <Home/>    */}
      {/* <ShopByStyle/> */}
      {/* <MoreFilters/> */}
    <Footer/>
  {/* <ExApiShopStyle/> */}
    </div>
    </>
  );
}

export default App;
