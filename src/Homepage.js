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
  const [searchTerm, setSearchTerm] = useState("");

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
        <DropdownButton title={selectedOption} onSelect={handleSelectChange}>
          {area.map((item, index) => (
            <Dropdown.Item key={index} eventKey={item}>
              {item}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
      <div className="header">
        <div className="search-bar">
          <input
            type="text"
            placeholder="搜索餐廳"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="container2">
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
      <div>
        <h2>餐廳資訊</h2>
      </div>
      <div>
        {data
          .filter((item) =>
            item.Name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item, index) => {
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
          background-image: linear-gradient(to right, #FF8EFF, #84C1FF);
        }

        .header {
          display: flex;
          justify-content: center;
          margin: 20px 0;
        }

        .search-bar {
          width: 50%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .search-bar input {
          width: 100%;
          padding: 10px;
          font-size: 18px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-sizing: border-box;
        }
        .container2 {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          background-color: #fff;
          border-radius: 8px;
          margin: 10px 0;
          padding: 20px;
        }

        h2 {
          margin: 0;
        }

        p {
          margin: 0;
        }

        img {
          border-radius: 8px;
        }

        button {
          background-color: transparent;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }

        button:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
}
