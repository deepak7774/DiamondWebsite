import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ExApiShopStyle = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dev.demo-swapithub.com/diamond/api/v1/product');
        const productData = response.data.data;

        const updatedProducts = await Promise.all(
          productData.map(async (product) => {
            const finalLevel = calculateFinalLevel(product.finishLevel);
            const finalMetalType = calculateFinalMetalType(product.metalType);

            const priceResponse = await axios.get(
              `https://www.overnightmountings.com/priceapi/service.php?action=pricecalculation&type=json&level=${finalLevel}&metaltype=${finalMetalType}&metalcolor=${product.metalColor}&stylenumber=${product.sku}&quality=${product.diamondQuality}`
            );

            return {
              name: product.name,
              image: product.default_image_url,
              price: priceResponse.data.price,
            };
          })
        );

        setProducts(updatedProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will run once after the initial render

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

  return (
    <div className='choose-setting-main'>
      
        <div className='container'>
            <div className='choose-setting'>
      {products.map((product, index) => (
        <div key={index} className='single-product'>
           
          <div className='image-product'>
            <img src={product.image} alt={product.name} />
          </div>
          <div>{product.name}</div>
          <div className='price'>{product.price}</div>
        
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default ExApiShopStyle;
