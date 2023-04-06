import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Geocode from "react-geocode";

// Set your Google Maps API key here

export default function NearRestaurant() {
  const [areaName, setAreaName] = useState("");
  const [mapUrl, setMapUrl] = useState("");

  function displayNearbyRestaurants(lat, lng) {
    // Construct a Google Maps API url
    const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7Clabel:A%7C${lat},${lng}&key=AIzaSyCkPkl9UPI2puzUtW3qOpVjmOQywu0YIwk`;

    // Update state variables
    setMapUrl(mapUrl);

    // Fetch the address from the Google Maps Geocoding API
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCkPkl9UPI2puzUtW3qOpVjmOQywu0YIwk`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const addressComponents = data.results[0].address_components;

        let areaName = "";
        for (let i = 0; i < addressComponents.length; i++) {
          const component = addressComponents[i];
          if (
            component.types.includes("neighborhood") ||
            component.types.includes("sublocality")
          ) {
            areaName = component.long_name;
            break;
          }
        }

        setAreaName(areaName);
      })
      .catch((error) => console.error(error));
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          displayNearbyRestaurants(lat, lng);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  return (
    <div>
      <div className="head">
        <h1>附近餐廳</h1>
      </div>

      <div>
        <button onClick={getLocation}>Get Current Location</button>
        <div>{areaName}</div> {/* Display the area name here */}
        <div>
          {mapUrl && <img src={mapUrl} alt="Map" />}{" "}
          {/* Display the map here */}
        </div>
      </div>

      <div className="header">
        <Link to="/HomePage">
          <div className="backToHomeBtn">↩️ 返去主頁面</div>
        </Link>
      </div>
      <style jsx>{`
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
