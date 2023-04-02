import React, { useState, useEffect } from "react";

export default function AdvancedSearch() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [mostHitRestaurant, setMostHitRestaurant] = useState("");

  useEffect(() => {
    fetch("https://manofdiligence.github.io/Restaurant.json")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    // Find most hit restaurant
    let restaurantMap = new Map();
    searchHistory.forEach((term) => {
      data.forEach((restaurant) => {
        if (restaurant.Name.toLowerCase().includes(term.toLowerCase())) {
          let count = restaurantMap.get(restaurant.id) || 0;
          restaurantMap.set(restaurant.id, count + 1);
        }
      });
    });

    let maxCount = 0;
    let maxRestaurant = "";
    restaurantMap.forEach((count, id) => {
      if (count > maxCount) {
        maxCount = count;
        maxRestaurant = data.find((restaurant) => restaurant.id === id);
      }
    });
    setMostHitRestaurant(maxRestaurant);
  }, [searchHistory, data]);

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleClearSearch() {
    setSearchTerm("");
    setSearchHistory([]);
  }

  function handleSearchHistory(restaurantName) {
    if (!searchHistory.includes(restaurantName)) {
      setSearchHistory((prevHistory) => [...prevHistory, restaurantName]);
    }
  }

  return (
    <div>
      <h1>Advanced Search</h1>
      <div>
        <input
          type="text"
          placeholder="Search restaurants by name or description"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleClearSearch}>清除</button>
      </div>
      {searchTerm !== "" && (
        <div>
          {data
            .filter((restaurant) =>
              restaurant.Name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((restaurant) => (
              <div key={restaurant.id}>
                <h2 onClick={() => handleSearchHistory(restaurant.Name)}>
                  {restaurant.Name}
                </h2>
                {searchHistory.includes(restaurant.Name) && (
                  <div>
                    <h3>歷史記錄:</h3>
                    <ul>
                      {searchHistory.map((term, index) => (
                        <li key={index}>{term}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
        </div>
      )}
      {mostHitRestaurant && (
        <div>
          <h2>熱門餐廳:</h2>
          <p>{mostHitRestaurant.Name}</p>
        </div>
      )}
    </div>
  );
}
