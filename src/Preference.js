import React from "react";
import button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
export default function PreferencePage() {
  // an array for type of food
  const FoodType = [
    "酒楼",
    "港式茶餐厅",
    "粥店",
    "中菜馆",
    "快餐店",
    "日式菜",
    "西餐",
    "韩式",
    "泰国菜",
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
      <div onClick={handleClick}>
        {/* A list of food type */}
        {FoodType.map((food, index) => (
          <button type="button" key={index} evenkey={food}>
            {food}
          </button>
        ))}
      </div>
      {/* conFirm button */}
      <div>Confirm</div>
    </div>
  );
}
