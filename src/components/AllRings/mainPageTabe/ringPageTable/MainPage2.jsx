import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ChooseRingProduct } from "../../ChooseSettingPage/ChooseRingProduct/ChooseRingProduct";
import { ChooseDiamonds } from "../../ChooseDiamondPage/ChooseDiamonds";

export const MainPage2 = () => {
  const [activeSingle, setActiveSingle] = useState("ChooseRingProduct");
  const [productData, setProductData] = useState({
    ringPrice: [],
    img1: "",
    id: "",
    name: "",
  });
  const { productId } = useParams();

  const Apidata = "http://localhost:3500/product";

  async function getStoreData() {
    try {
      const res = await axios.get(`${Apidata}/${productId}`);
      const responseData = res.data; // Store the response data in a variable
      setProductData({
        ringPrice: responseData.ringPrice,
        img1: responseData.img1,
        id: responseData.id,
        name: responseData.name,
      });
      console.log("data=======", responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getStoreData();
  }, [productId]);
  console.log(productData);
  return (
    <div>
      <div className="main-btn-setting">
        <button onClick={() => setActiveSingle("ChooseRingProduct")}>
          <div>            
            <p>1- Setting</p> <span>{productData.name} </span><span> - ${productData.ringPrice}</span>
            <br />
            <Link to="/" className="change">              
              change
            </Link>
          </div>
          <div>         
            <img src={productData.img1} alt="" />
          </div>
        </button>
        <button>
         
          <Link to="/mainPage3" onClick={() => setActiveSingle("LabDiamond")}>
           
            <div>
              
              <div>2- Choose Diamond </div>
              <Link to="" className="change">
               
                Browse Diamonds
              </Link>
            </div>
            <div>
              <img
                src="https://css.brilliantearth.com/static/img/svg/diamond.svg"
                alt=""
              />
            </div>
          </Link>
        </button>

        <button>
            <div>
              3- Complete Ring <p> Select Ring Size </p>
            </div>
            <div>
              <img
                src="https://css.brilliantearth.com/static/img/svg/ring.svg"
                alt=""
              />
            </div>
          </button>
      </div>
      <div className="">
        {activeSingle === "ChooseRingProduct" && <ChooseRingProduct />}
        {activeSingle === "LabDiamond" && <ChooseDiamonds />}
      </div>
    </div>
  );
};
