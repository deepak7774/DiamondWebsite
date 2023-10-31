import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from "../../images/bannerImg.png"

export const Banner = () => {
  return (
    <>
    <div className='banner-main'>
        <img src={bannerImg} alt="" />
        <div className=' container banner'>
            <div className='banner-text'>
            <h1>True to You</h1>
            <p>Carefully designs that celebrate your story</p>
            <div><Link className='button' to="/">Shop Engageent Rings</Link></div>
            </div>
           
        </div>
    </div>
    </>
  )
}
