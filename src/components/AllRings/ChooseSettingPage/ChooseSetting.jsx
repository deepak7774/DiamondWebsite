import React,{useState} from 'react'
import MoreFilters from './MoreFilters';
import ShopByStyle from './ShopByStyle';


export const ChooseSetting = () => {
const [myActive, setMyActive] = useState("ShopByStyle");
console.warn("=========",myActive);
  return (
    <div>
       <div className='lab-diamond-btn'>
        <button onClick={()=> setMyActive("ShopByStyle")}>ShopByStyle</button>
        <button onClick={()=> setMyActive("MoreFilters")}>MoreFilters</button>
       </div>

       <div>
{myActive === "ShopByStyle" && <ShopByStyle/>}
{myActive === "MoreFilters" && <MoreFilters/>}
       </div>
    </div>
  )
}
