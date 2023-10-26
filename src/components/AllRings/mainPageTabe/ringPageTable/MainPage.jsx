import React, { useState } from "react";
import { ChooseSetting } from "../../ChooseSettingPage/ChooseSetting";
import { Link } from "react-router-dom";

export const MainPage = () => {
  const [active, setActive] = useState("ChooseSetting");
  return (
    <>
      <div>
        <div className="main-btn-setting">
          <button>            
            <Link to="" onClick={() => setActive("ChooseSetting")}>
             
              <div>1 Choose Setting</div>
              <div>
                <img
                  src="https://css.brilliantearth.com/static/img/svg/setting.svg"
                  alt=""
                />
              </div>
            </Link>
          </button>
          <button>
            
            <Link
              to="/diemondPageTabe1"
              onClick={() => setActive("LabDiamond")}
            >        
              <div>
                <div>2 Choose Diamond</div>
                <Link to="" className="Browse-Diamonds">
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
              Complete Ring <p> Select Ring Size </p>
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
          {active === "ChooseSetting" && <ChooseSetting />}
          {/* {active === "LabDiamond" &&  <ChooseDiamonds/>} */}
          {/* {active === "CompleteRing" &&  <Setting title="3"/>} */}
        </div>
      </div>
    </>
  );
};
