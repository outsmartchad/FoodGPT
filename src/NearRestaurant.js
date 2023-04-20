import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function NearRestaurants() {
  const [district, setDistrict] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [map, setMap] = useState(null);
  const navigate = useNavigate();

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
        <div key={index}>
          <div className="container2">
            <h4>{item.district}</h4>
            <h4>{item.name}</h4>
            <h4>{item.type}</h4>
          </div>
          <div className="container2">
            <img
              src={item.image}
              alt="rest"
              width="300px"
              onClick={() =>
                navigate("/Restaurant", { state: { Restaurant: item } })
              }
            />
            <h4>{item.Popularity}</h4>
            <h4>{item.address}</h4>
          </div>
        </div>
      ))}

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
