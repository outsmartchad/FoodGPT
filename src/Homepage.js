import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function HomePage() {
  const [selectedOption, setSelectedOption] = useState("Area");
  const [area, setArea] = useState([]);
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const localFavorites = localStorage.getItem("favorites");
    return localFavorites ? JSON.parse(localFavorites) : [];
  });

  useEffect(() => {
    fetch("https://manofdiligence.github.io/Restaurant.json")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("https://manofdiligence.github.io/Areas.json")
      .then((response) => response.json())
      .then((result) => setArea(result))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleSelectChange = (eventKey) => {
    setSelectedOption(eventKey);
  };

  const toggleFavorite = (restaurant) => {
    const isFavorite = favorites.some((fav) => fav.id === restaurant.id);
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== restaurant.id));
    } else {
      setFavorites([...favorites, restaurant]);
    }
  };

  return (
    <div>
      <div>
        {/* created a dropdown and title it by user choice */}
        <DropdownButton title={selectedOption} onSelect={handleSelectChange}>
          {/* to get each element in the area array 
          and put it as a dropdown item component */}
          {area.map((item, index) => (
            <Dropdown.Item key={index} eventKey={item}>
              {item}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
      <div className="header">
        {/* Search Bar class */}

        <Link to="/AdvancedSearch">
          <img
            src={process.env.PUBLIC_URL + "./search.jpeg"}
            alt="search Bar"
            height="100px"
          />
        </Link>
      </div>
      <div className="container2">
        {/* near restaurant, restaurant rank*/}
        <p>
          <Link to="/NearRestaurant">
            <img
              width="100"
              src={process.env.PUBLIC_URL + "/c1.png"}
              alt="c1"
            />
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/RankingClass">
            <img width="80" src={process.env.PUBLIC_URL + "/c3.png"} alt="c3" />
          </Link>
        </p>
      </div>
      {/* restaurant info class */}
      <div>
        <h2>餐廳資訊</h2>
      </div>
      <div>
      {/* Other components and elements */}
      {data.map((item, index) => {
        const isFavorite = favorites.some((fav) => fav.id === item.id);
        return (
          <div key={index} id={item.id} className="container2">
            <h2>{item.Name}</h2>
            <img src={item.Image} alt="rest photo" width="300px" />
            <p>{item.Area}</p>
            <button onClick={() => toggleFavorite(item)}>
              {isFavorite ? "⭐️" : "★"}
            </button>
          </div>
        );
      })}
    </div>
    <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
          background-image: linear-gradient(to right, #FF8EFF, 	#84C1FF);
        }
        `}</style>
    </div>
  );
}
