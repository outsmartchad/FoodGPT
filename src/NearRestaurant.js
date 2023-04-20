import React, { useState, useEffect, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
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
export default function NearRestaurants() {
  const [district, setDistrict] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const { isLoaded, loadError } = Map();
  const mapRef = useRef();
  const searchBoxRef = useRef();
  const [map, setMap] = useState(null);
  const navigate = useNavigate();

  const [coords, setCoords] = useState({ lat: 22.410549, lng: 114.126456 });
  const [showMap, setShowMap] = useState(false);

  const handleClose = () => setShowMap(false);
  const handleShow = () => setShowMap(true);

  const handleClick = () => {
    handleShow();
  };
  // ...
  // x and y are the coordinates of the map center
  const initialCoords = {
    lat: coords.lat,
    lng: coords.lng,
  };

  const libraries = ["places"];

  const [markerPosition, setMarkerPosition] = useState(initialCoords);

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

  useEffect(() => {
    if (mapRef.current) {
      console.log("Map instance:", mapRef.current);
    }
  }, [mapRef]);

  const onMapLoad = (mapInstance) => {
    mapRef.current = mapInstance;
  };

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
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };
  return (
    <div className="rankingList">
      <h2>
        {district ? `你所在嘅地址為： ${district}` : "Loading..."}
        <p></p>
        <Button onClick={handleClick}>點擊查看五個最近的餐廳的位置</Button>
      </h2>

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
      <Modal show={showMap} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>五個最近的餐廳</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={coords} // Update this line
            zoom={10}
            onLoad={onMapLoad}
          >
            {restaurants.slice(0, 5).map((restaurant, index) => (
              <Marker
                key={index}
                position={{ lat: restaurant.lat, lng: restaurant.lng }}
                title={restaurant.name}
              />
            ))}
          </GoogleMap>
        </Modal.Body>
      </Modal>
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
