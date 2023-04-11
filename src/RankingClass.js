import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [popularityScores, setPopularityScores] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://manofdiligence.github.io/Restaurant.json")
      .then((response) => response.json())
      .then((result) => setData(result["黃埔"]))
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
    }));
    const sortedScores = scores.sort((a, b) => b.popularity - a.popularity);
    setPopularityScores(sortedScores);
    setRestaurants(sortedScores.slice(0, 5));
  }, [data]);

  return (
    <div className="rankingList">
      <h2>五間最受歡迎嘅餐廳:</h2>
      {restaurants.map((item, index) => (
        <div key={index} className="container2">
          <h2>{item.name}</h2>
          <h2>{item.type}</h2>
          <img src={item.image} alt="rest" width="300px" />
          <h2>{item.popularity}</h2>
          <h2>{item.district}</h2>
          <h2>{item.address}</h2>
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
