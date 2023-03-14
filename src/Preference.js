import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";

export default function PreferencePage() {
  // an array for type of food

  const [foodType, setFoodType] = useState([]);

  useEffect(() => {
    fetch("https://manofdiligence.github.io/FoodType.json")
      .then((response) => response.json())
      .then((data) => setFoodType(data));
  }, []);
  const [selectedPreference, setSelectedPreference] = useState([]);

  function handleCheckboxChange(food, checked) {
    if (checked) {
      setSelectedPreference((prevSelected) => [...prevSelected, food]);
    } else {
      setSelectedPreference((prevSelected) =>
        prevSelected.filter((selected) => selected !== food)
      );
    }
  }

  function handleConfirm(arrSelected) {
    arrSelected.map((food, index) => {
      console.log("number " + index + ": " + food);
    });
  }

  return (
    <div>
      {/* A list of food type */}
      <div className="header">
        {/* Search Bar class */}
        <h1>請選擇您喜愛的料理:</h1>
      </div>

      <div className="container2">
        {/*  restaurant info generator */}
        {foodType.map((type) => (
          <Form.Check
            type="checkbox"
            key={type.id}
            label={type.type}
            onChange={(e) => handleCheckboxChange(type.type, e.target.checked)}
          />
        ))}
      </div>
      <div className="container2">
        {/* Show selected food */}
        <button
          onClick={() => handleConfirm(selectedPreference)}
          className="YesUI"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
