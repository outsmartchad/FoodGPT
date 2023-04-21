import { useLocation, Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { LoadScript } from "@react-google-maps/api";
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
  const initialRestaurantData = location.state && location.state.Restaurant;
  const [coords, setCoords] = useState(
    initialRestaurantData
      ? { lat: initialRestaurantData.lat, lng: initialRestaurantData.lng }
      : { lat: 0.0, lng: 0.0 }
  );
  // ...
  // x and y are the coordinates of the map center
  const initialCoords = {
    lat: coords.lat,
    lng: coords.lng,
  };

  const libraries = ["places"];

  const [markerPosition, setMarkerPosition] = useState(initialCoords);
  const [searchInput, setSearchInput] = useState("");

  const libs = ["places"];
  // size of the map
  const mapContainerStyle = {
    width: "100%",
    height: "500px",
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
      setSearchInput(location.state.Restaurant.address);
      setCoords({
        lat: location.state.Restaurant.lat,
        lng: location.state.Restaurant.lng,
      });
    }
    console.log(coords);
  }, [location]);
  // Add this useEffect to search for the restaurant's address
  useEffect(() => {
    if (searchBoxRef.current && mapRef.current && searchInput) {
      searchBoxRef.current.getPlacesAsync([searchInput]).then((places) => {
        const firstPlace = places[0];
        if (firstPlace && firstPlace.geometry) {
          const { location } = firstPlace.geometry;
          mapRef.current.panTo(location);
          mapRef.current.setZoom(15);
          setMarkerPosition({ lat: location.lat(), lng: location.lng() });
        }
      });
    }
  }, [searchInput]);

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
          <h1>{restaurantData.name}</h1>
          <img src={restaurantData.image} alt="rest photo" width="300px" />
        </div>
        <div className="container2">
          <h1>
            介&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h1>
          <h1>
            紹&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h1>
          <h3>{restaurantData.Intro}</h3>
        </div>
        <div className="container2">
          <h1>價錢</h1>
          <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
          <h3>{restaurantData.priceRange}</h3>
        </div>
      </div>
      <div className="container2">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={coords} // Update this line
          zoom={10}
          onLoad={onMapLoad}
        >
          <Marker position={markerPosition} />
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
