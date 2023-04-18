import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Restaurant() {
  const [restaurantData, setRestaurantData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.Restaurant) {
      setRestaurantData(location.state.Restaurant);
    }
  }, [location]);

  if (!restaurantData) {
    return <div>No restaurant data available.</div>;
  }

  return (
    <div>
      <div>
      <div className="container2">
                  
                  <h3>{restaurantData.type}</h3>
                  <h3>{restaurantData.district}</h3>
                  <h3>{restaurantData.address}</h3>
                  </div>
                  <div className="container2">
                  <h1>{restaurantData.Popularity}</h1>
                  <h1>{restaurantData.name}</h1>
                  <img src={restaurantData.image} alt="rest photo" width="300px" />
                  </div>
       </div>           
        <style jsx={true}>{`
        .head {
          background-image: linear-gradient(to right, #ff8eff, #84c1ff);
        }
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
          background-image: linear-gradient(to right, #ff8eff, #84c1ff);
        }
      `}</style>
    </div>
  );
}
