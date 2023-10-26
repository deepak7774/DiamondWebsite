import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const MyExample = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get('https://dev.demo-swapithub.com/diamond/api/v1/diamondshape')
      .then((res) => {
        setUserData(res.data.data);
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
           userData.map((item)=>{
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
