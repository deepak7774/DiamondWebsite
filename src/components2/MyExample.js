import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const MyExample = () => {
  const [shapeData, setShapeData] = useState(null);

  useEffect(() => {
    axios
      .get('https://dev.demo-swapithub.com/diamond/api/v1/diamondshape')
      .then((res) => {
        setShapeData(res.data.data);
      })
      .catch(() => {
        console.log('API error');
      });
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Api_body">
        {
           shapeData.map((item)=>{
            return(
                <>
            <h1> {item.shape}</h1>

                </>
            )
           }) 
        }
      
    </div>
  );
};
