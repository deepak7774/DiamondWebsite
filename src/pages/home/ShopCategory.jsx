import React from "react";
import  engagementRing  from "../../images/EngagementRing.png";

export const ShopCategory = () => {
  return (
    <>
      <div className="ShopCategory container">
        <h2>Shop by category</h2>
        <div className="flex">
          <div className="ShopCategory-img-text">
            <img src={engagementRing} alt="" />
            <p>Engagement Rings</p>
          </div>
          <div className="ShopCategory-img-text">
            <img src={engagementRing} alt="" />
            <p>Engagement Rings</p>
          </div>
          <div className="ShopCategory-img-text">
            <img src={engagementRing} alt="" />
            <p>Engagement Rings</p>
          </div>
          <div className="ShopCategory-img-text">
            <img src={engagementRing} alt="" />
            <p>Engagement Rings</p>
          </div>
          <div className="ShopCategory-img-text">
            <img src={engagementRing} alt="" />
            <p>Engagement Rings</p>
          </div>
        </div>
      </div>
    </>
  );
};
