import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [popularityScores, setPopularityScores] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const areaName = localStorage.getItem("area");
    const parsedAreaName = areaName === null ? "黃埔" : JSON.parse(areaName);

    fetch("https://manofdiligence.github.io/Restaurant.json")
      .then((response) => response.json())
      .then((result) => {
        setData(result[parsedAreaName]);
        setRestaurants(result[parsedAreaName].slice(0, 5));
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const scores = data.map((restaurant) => ({
      name: restaurant.name,
      popularity: restaurant.Popularity,
      type: restaurant.type,
      image: restaurant.image,
      district: restaurant.district,
      address: restaurant.address,
      lat: restaurant.lat,
      lng: restaurant.lng,
      Intro: restaurant.Intro,
    }));
    const sortedScores = scores.sort((a, b) => b.popularity - a.popularity);
    setRestaurants(sortedScores.slice(0, 5));
  }, [data]);

  return (
    <div className="rankingList">
      <h2>五間最受歡迎嘅餐廳:</h2>
      {restaurants.map((item, index) => (
        <div key={index}>
          <div className="container2">
            <h4>{item.popularity}</h4>
            <h4>{item.district}</h4>
            <h4>{item.address}</h4>
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
            <h4>{item.name}</h4>
            <h4>{item.type}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function RankingClass() {
  return (
    <div>
      <div className="head">
        <h1>餐廳排名</h1>
      </div>
      <RestaurantList />
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
