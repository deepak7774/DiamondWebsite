import React from "react";
import bridalSets from "../../images/bridalSets.png";
import { Link } from "react-router-dom";
export const BridalSets = () => {
  return (
    <>
      <div className="bridalSets-necklaces flex">
        <div className="bridalSets">
          <div className="bridalSets-img">
            <img src={bridalSets} alt="" />
          </div>
          <div className="bridalSets-text">
            <h3>Bridal Sets</h3>
            <p>Lorem Ipsum is typesetting industry.</p>
            <div className="bridalSets-btn">
              <Link className="button" to="/">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="bridalSets">
          <div className="bridalSets-img">
            <img src={bridalSets} alt="" />
          </div>
          <div className="bridalSets-text">
            <h3>Bridal Sets</h3>
            <p>Lorem Ipsum is typesetting industry.</p>
            <div className="bridalSets-btn">
              <Link className="button" to="/">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
