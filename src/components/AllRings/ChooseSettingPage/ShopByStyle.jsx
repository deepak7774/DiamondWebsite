import React, { useState, useEffect } from "react";
import "../../../App.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { productList } from "../../../redux/productAction";

const ShopByStyle = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  const filters = [
    "Classic",
    "natural inspire",
    "three stone",
    "hello",
    "luxe",
    "demo",
  ];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      const updatedFilters = selectedFilters.filter(
        (filter) => filter !== selectedCategory
      );
      setSelectedFilters(updatedFilters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      const tempItems = data.filter((item) =>
        selectedFilters.includes(item.multiCategory)
      );
      setFilteredData(tempItems);
    } else {
      setFilteredData(data);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters, data]);

  return (
    <>
    <div className="container">
      <div className="main-content">
        <h3>Engagement Ring Settings</h3>
        <div>
          <div className="buttons-container">
            {filters.map((category, idx) => (
              <button
                onClick={() => handleFilterButtonClick(category)}
                className={`button ${
                  selectedFilters.includes(category) ? "active" : ""
                }`}
                key={`filters-${idx}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="resultdata setings-Page-img">
        {filteredData.map((item) => (
          <div key={item.slug} className="all-pages-data ">
            <Link to={`/mainPage2/${item.slug}`}>
              <div className="all-img1">
                <img src={item.image} alt={item.name} />
                
              </div>
              <div className="all-card-four-color">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{item.color}</p>
              <p className="multiCategory">{item.multiCategory}</p>
            </Link>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default ShopByStyle;
