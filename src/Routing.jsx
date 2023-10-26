import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ChooseDiamondProduct } from './components/AllRings/ChooseDiamondPage/ChooseDiamondProduct/ChooseDiamondProduct'
import { ChooseRingProduct } from './components/AllRings/ChooseSettingPage/ChooseRingProduct/ChooseRingProduct'
import { AddToBag } from './components/AllRings/AddToBag'
import Cart from './components/AllRings/Cart'
import ShapCaret from './components/AllRings/ChooseDiamondPage/ShapCaret'
import ShopByStyle from './components/AllRings/ChooseSettingPage/ShopByStyle'
import { DiemondPageTabe1 } from './components/AllRings/mainPageTabe/diemondPageTabe/DiemondPageTabe1'
import { MainPage } from './components/AllRings/mainPageTabe/ringPageTable/MainPage'
import { MainPage2 } from './components/AllRings/mainPageTabe/ringPageTable/MainPage2'
import { MainPage3 } from './components/AllRings/mainPageTabe/ringPageTable/MainPage3'
import { DiemondPageTabe2 } from './components/AllRings/mainPageTabe/diemondPageTabe/DiemondPageTabe2'
import { TablePopUp } from './components/AllRings/ChooseDiamondPage/TablePopUp'
import { MainPage4 } from './components/AllRings/mainPageTabe/ringPageTable/MainPage4'
import { MainPage5 } from './components/AllRings/mainPageTabe/ringPageTable/MainPage5'
import { ChooseRingProductCart } from './components/AllRings/ChooseSettingPage/ChooseRingProduct/ChooseRingProductCart'
import { ChooseDiamondProductCart } from './components/AllRings/ChooseDiamondPage/ChooseDiamondProduct/ChooseDiamondProductCart'
import { MainPage4_1 } from './components/AllRings/mainPageTabe/ringPageTable/MainPage4_1'


export const Routing = () => {
  return (
    <div>
        <Routes>
        <Route path='/' exact element={<MainPage />} />
        <Route path='mainPage2/:productId'  element={<MainPage2 />} /> 
        <Route path='mainPage3/:productId' element={<MainPage3/>}/>
        <Route path='mainPage4/:productId' element={<MainPage4/>}/>
        <Route path='mainPage4_1/:productId' element={<MainPage4_1/>}/>
        <Route path='mainPage5/:productId' element={<MainPage5/>}/>
        <Route path='chooseDiamondProduct' element={< ChooseDiamondProduct />} />
        <Route path='chooseDiamondProductCart/:productId' element={< ChooseDiamondProductCart />} />
        <Route path='shopByStyle' element={<ShopByStyle />} /> 
        <Route path='chooseRingProduct/:productId' element={<ChooseRingProduct />} />
        <Route path='chooseRingProductCart/:productId' element={<ChooseRingProductCart />} />
        <Route path='addToBag/:productId' element={<AddToBag />} /> 
        <Route path='cart' element={<Cart/>} />
        <Route path='shapCaret/:productId' element={<ShapCaret/>}/>
        <Route path='diemondPageTabe1' element={<DiemondPageTabe1/>}/>
        <Route path="diemondPageTabe2" element={<DiemondPageTabe2/>}/>  
        <Route path="mainPage3/:productId" element={<TablePopUp/>}/>      
      </Routes> 
    </div>
  )
}
