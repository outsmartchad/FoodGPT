import { useLocation, Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  StandaloneSearchBox,
} from "@react-google-maps/api";
function Map() {
  const libs = ["places"];
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyC-daFg6CIm07-m9rfc0fdSVg7CaxMGvVI",
    libraries: libs,
  });

  return { isLoaded, loadError };
}
export default function Restaurant() {
  const [restaurantData, setRestaurantData] = useState(null);

  const location = useLocation();

  const libs = ["places"];
  // size of the map
  const mapContainerStyle = {
    width: "100%",
    height: "500px",
  };
  // x and y are the coordinates of the map center
  const initialCoords = {
    lat: 40.7128,
    lng: -74.006,
  };
  // google map
  const { isLoaded, loadError } = Map();
  const mapRef = useRef();
  const searchBoxRef = useRef();

  useEffect(() => {
    if (mapRef.current) {
      console.log("Map instance:", mapRef.current);
    }
  }, [mapRef]);

  const onMapLoad = (mapInstance) => {
    mapRef.current = mapInstance;
  };

  useEffect(() => {
    if (location.state && location.state.Restaurant) {
      setRestaurantData(location.state.Restaurant);
    }
  }, [location]);

  if (loadError) {
    return <div>Error loading map</div>;
  }

  if (!isLoaded) {
    console.log({ restaurantData });
    return <div>Loading map...</div>;
  }
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
      <div className="container2">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={initialCoords}
          zoom={12}
          onLoad={onMapLoad}
        >
          <Marker position={initialCoords} />
        </GoogleMap>
      </div>
      <div className="header">
        <Link to="/HomePage">
          <div className="backToHomeBtn">↩️ 返去主頁面</div>
        </Link>
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
