import React from "react";
import button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
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

  const [selection, setSelection] = useState("Food");

  // to create the type selection
  /* useEffect(()={
      fetch()

  }) */
  const handleClick = (evenkey) => {
    const selectionOption = evenkey.value;
    setSelection(selectionOption);
    console.log(selectionOption);
  };

  return (
    <div>
      {/* clickBox */}
      <div>
        {/* A list of food type */}
        {FoodType.map((food, index) => (
          <button
            type="button"
            key={index}
            evenkey={food}
            onClick={handleClick}
          >
            {food}
          </button>
        ))}
      </div>
      {/* conFirm button */}
      <div>Confirm</div>
    </div>
  );
}
