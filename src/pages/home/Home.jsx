import React from 'react'
import { Banner } from './Banner'
import { ShopDiamondShape } from './ShopDiamondShape'
import "../Style.css"
import { ShopCategory } from './ShopCategory'
import { EndsSoon } from './EndsSoon'
import { EternityRings } from './EternityRings'
import { MostLoved } from './MostLoved'
import { BridalSets } from './BridalSets'
import { MenRings } from './MenRings'


export const Home = () => {
  return (
    <>    
<div>
  <Banner/>
  <ShopDiamondShape/>
  <ShopCategory/>
  <EndsSoon/>
  <EternityRings/>
  <BridalSets/>
  <MenRings/>
  <MostLoved/>
</div>
    
    </>
  )
}
