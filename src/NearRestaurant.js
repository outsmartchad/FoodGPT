import React, { useState, useEffect } from "react";

export default function NearRestaurants() {
  const [district, setDistrict] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [map, setMap] = useState(null);

  //locate the district
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    const getPosition = (position) => {
      const { latitude, longitude } = position.coords;
      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`
      )
        .then((response) => response.json())
        .then((data) => {
          const address = data.address;
          let districtName = "";
          const districtKeys = ["district", "borough", "city_district"];
          for (let i = 0; i < districtKeys.length; i++) {
            if (address[districtKeys[i]]) {
              districtName = address[districtKeys[i]];
              break;
            }
          }
          if (districtName) {
            console.log(`District: ${districtName}`);
            setDistrict(districtName);
          } else {
            console.error("Unable to determine district from address.");
          }
        })
        .catch((error) => console.error(error));
    };

    getLocation();
  }, []);

  //fetch our restaurant database
  useEffect(() => {
    if (!district) return;
    fetch("https://manofdiligence.github.io/Restaurant.json")
      .then((response) => response.json())
      .then((result) => {
        setMap(result);
        let districtRestaurants =
          result && result[district] ? result[district] : [];
        setRestaurants(districtRestaurants);
      })
      .catch((err) => console.error(err));
  }, [district]);

  return (
    <div className="rankingList">
      <h2>{district ? `你所在嘅地址為： ${district}` : "Loading..."}</h2>
      {restaurants.map((item, index) => (
        <div key={index} className="container2">
          <h2>{item.name}</h2>
          <h2>{item.type}</h2>
          <img src={item.image} alt="rest" width="300px" />
          <h2>{item.Popularity}</h2>
          <h2>{item.district}</h2>
          <h2>{item.address}</h2>
        </div>
      ))}
    </div>
  );
}
