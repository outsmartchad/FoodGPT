import React from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";

export default function PreferencePage() {
  // an array for type of food
  
  const FoodType = [
    "酒樓",
    "港式茶餐廳",
    "粥店",
    "中餐館",
    "快餐店",
    "日式料理",
    "西餐",
    "韓式料理",
    "泰式料理",
    "甜品店",
    "素食",
    "自助餐",
  ];
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
          {FoodType.map((food, index) => (
        <Form.Check
          key={index}
          type="checkbox"
          inline
          label={food}
          onChange={(e) => handleCheckboxChange(food, e.target.checked)}
        />
      ))}
      </div>
      <div className="container2">
      {/* Show selected food */}
      <button onClick={() => handleConfirm(selectedPreference)} className="YesUI">Confirm</button>
      </div>

    </div>
  );
}
