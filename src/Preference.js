import React from "react";
import Button from "react-bootstrap/Button";
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

  const [selectedFood, setSelectedFood] = useState(null);

  const handleClick = (food) => {
    setSelectedFood(food);
    console.log(food);
  };

  return (
    <div>
      {/* A list of food type */}
      {FoodType.map((food, index) => (
        <Button
          key={index}
          variant="outline-primary"
          onClick={() => handleClick(food)}
        >
          {food}
        </Button>
      ))}
      {/* Show selected food */}
      <Button>Confirm</Button>
    </div>
  );
}
