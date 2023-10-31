import React from 'react'
import endSoon from "../../images/endSoon.png"

export const EndsSoon = () => {
  return (
    <>
    <div className='endsSoon'>
        <div className='container flex'>
       <div>
        <img src={endSoon} alt="endSoon" />
       </div>
       <div className='endsSoon-text'>
        <h2>Ends Soon!</h2>
        <p className='earrings'>Diamond Earrings with purchase over $1,000.</p>
        <p>Diamond Earrings & Necklace with purchase over $3,000.</p>
       </div>
       </div>
    </div>
    </>
  )
}
