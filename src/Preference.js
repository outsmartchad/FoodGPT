import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./PreferencePage.css";
function chunk(arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}
export default function PreferencePage() {
  // an array for type of food
  // foodType is a empty array by default
  const [foodType, setFoodType] = useState([]);
  const [selectedPreference, setSelectedPreference] = useState([]);
  // getting the array of data from FoodType.json
  // you can just see the array, by pasting the link to your browser
  useEffect(() => {
    fetch("https://manofdiligence.github.io/FoodType.json")
      .then((response) => response.json())
      .then((data) => setFoodType(data));
  }, []);

  // create a new array and put the newly selected foodtype into the new array
  function handleButtonClick(food) {
    if (selectedPreference.includes(food)) {
      setSelectedPreference((prevSelected) =>
        prevSelected.filter((selected) => selected !== food)
      );
    } else {
      setSelectedPreference((prevSelected) => [...prevSelected, food]);
    }
  }
  // just for console out to check if we get the value
  function handleConfirm(arrSelected) {
    arrSelected.map((food, index) => {
      console.log("number " + index + ": " + food);
    });
  }

  return (
    <div>
      <div className="header">
        <h1>請選擇您喜愛的料理:</h1>
      </div>

      <div className="container2">
        {chunk(foodType, 3).map((row, index) => (
          <div key={index} className="button-row">
            {row.map((type) => (
              <button
                className={`food-button ${
                  selectedPreference.includes(type.type) && "selected"
                }`}
                key={type.id}
                onClick={() => handleButtonClick(type.type)}
              >
                {type.type}
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="container2">
        {selectedPreference.length === 0 ? (
          <div>
            <button
              onClick={() => handleConfirm(selectedPreference)}
              className="YesUI"
            >
              Confirm
            </button>
            <h2>Please choose at least one choice!</h2>
          </div>
        ) : (
          <div>
            <Link to="/Homepage">
              <button
                onClick={() => handleConfirm(selectedPreference)}
                className="YesUI"
              >
                Confirm
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
