import React from 'react'
import shipRings from "../../images/shipRings.png"
import { Link } from 'react-router-dom'

export const MostLoved = () => {
  return (
    <>
    <div className="MostLoved container">
        <h2>Most Loved Engagement Rings</h2>
        <div className="flex">
          <div className="MostLoved-img-text">
            <img src={shipRings} alt="" />
            <p>Ready To Ship Rings</p>
          </div>
          <div className="MostLoved-img-text">
            <img src={shipRings} alt="" />
            <p>Engagement Rings</p>
          </div>
          <div className="MostLoved-img-text">
            <img src={shipRings} alt="" />
            <p>Engagement Rings</p>
          </div>
          <div className="MostLoved-img-text">
            <img src={shipRings} alt="" />
            <p>Engagement Rings</p>
          </div>
          <div className="MostLoved-img-text">
            <img src={shipRings} alt="" />
            <p>Engagement Rings</p>
          </div>
        </div>

        <div className='MostLoved-btn'><Link className='button' to="/">View All</Link></div>
      </div>
    </>
  )
}
