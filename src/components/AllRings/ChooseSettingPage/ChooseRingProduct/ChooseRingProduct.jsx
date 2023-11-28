import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const ChooseRingProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    image: "",
    videos: "",
    price: [],
    metalType: "",
    metalColor: "",
    finishLevel: "",
    diamondQuality: "",
    sku: "",
    // Add more properties as needed
  });

  const { slug: productId } = useParams();
  console.log(productId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dev.demo-swapithub.com/diamond/api/v1/products');
        const product = response.data.data.find(product => product.slug === productId);
        console.log(product);

        if (product) {
          const finalLevel = calculateFinalLevel(product.finishLevel);
          const finalMetalType = calculateFinalMetalType(product.metalType);

          const priceResponse = await axios.get(
            `https://www.overnightmountings.com/priceapi/service.php?action=pricecalculation&type=json&level=${finalLevel}&metaltype=${finalMetalType}&metalcolor=${product.metalColor}&stylenumber=${product.sku}&quality=${product.diamondQuality}`
          );

          setProductData({
            name: product.name,
            image: product.default_image_url,
            videos: product.videos[1],
            price: priceResponse.data.price,
            metalType: product.metalType,
            metalColor: product.metalColor,
            finishLevel: product.finishLevel,
            diamondQuality: product.diamondQuality,
            sku: product.sku,
            CenterShape: product.CenterShape
            // Add more properties as needed
          });
          
        } else {
          console.log(`Product with ID ${productId} not found.`);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [productId]); // Dependency on productId means this effect will re-run whenever productId changes

  const calculateFinalLevel = (level) => {
    if (level.indexOf('Complete') !== -1) {
      return 'Complete';
    }
    if (level.indexOf('Polished') !== -1) {
      return 'Polished';
    }
    if (level.indexOf('Semi-mount') !== -1) {
      return 'Semi-mount';
    }
    return '';
  };

  const calculateFinalMetalType = (metalType) => {
    // Implement your logic for metal type conversion here
    // ...

    return '';
  };

  // diamond shape
  const [shapeData, setShapeData] = useState(null);

  useEffect(() => {
    axios
      .get('https://dev.demo-swapithub.com/diamond/api/v1/diamondshape')
      .then((res) => {
        setShapeData(res.data.data);
        console.log(res.data.data);
      })
      .catch(() => {
        console.log('API error');
      });
  }, []);

  if (!shapeData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="details-page">
      <div className="container">
        <div className="singleProduct">
          
          <div className="singleProduct-img">
            <img src={productData.image} alt="" />
            {/* <video src={productData.videos}></video> */}
            <iframe src={productData.videos} frameborder="0" width="100%" height="300"></iframe>
          </div>
          <div className="singleProduct-text">
          <h4>{productData.name}</h4>
          <div className="shape-diamond">
            {
              productData.CenterShape && productData.CenterShape == ['TAKE PEG HEAD']  ? (
                <div className="shape-main">
                  {
           shapeData.map((item)=>{
            return(
                <>
                <div className="shape">
            <img src={item.icon} alt={item.name} />
            </div>

                </>
            )
           }) 
        }
                </div>
              ) : (
                null 
              )
            }
          </div>
            <p><strong>Metal Type: </strong>{productData.metalType}</p>
            <p><strong>Metal Color: </strong>{productData.metalColor}</p>
            <p>${productData.price} (setting price)</p>
            <Link to={`/mainPage3/${productData.id}`} className="ChooseSetting">
              <button>Choose a settings</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
