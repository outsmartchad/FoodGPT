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
      <h2>{restaurantData.name}</h2>
      <h3>{restaurantData.type}</h3>
      <h3>{restaurantData.district}</h3>
      <h3>{restaurantData.address}</h3>
      <img src={restaurantData.image} alt="rest photo" width="300px" />
      <h3>{restaurantData.Popularity}</h3>
    </div>
  );
}
