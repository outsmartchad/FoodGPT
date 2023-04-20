import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import "./randomFood.css"; // Import the CSS file

export default function RandomFood() {
  const [foodList, setFoodList] = useState([]);
  useEffect(() => {
    fetch("https://manofdiligence.github.io/FoodList.json")
      .then((response) => response.json())
      .then((data) => {
        setFoodList(data);
        setBubbleColors(
          data.map(() => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
          })
        );
      });
  }, []);

  const [bubbleColors, setBubbleColors] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [drawnFood, setDrawnFood] = useState(null);

  function RandomFoodGenerator() {
    const randindex = Math.floor(Math.random() * foodList.length);
    setRandomIndex(randindex);
    setDrawnFood(foodList[randindex]);
    setClicked(true);
    const foodBubbles = document.querySelectorAll(".food-bubble");
    foodBubbles.forEach((bubble) => {
      bubble.classList.remove("food-bubble-hidden");
      bubble.classList.add("food-bubble-reset");
    });
    setTimeout(() => {
      foodBubbles.forEach((bubble) => {
        bubble.classList.remove("food-bubble-reset");
      });
    }, 1000);
  }

  return (
    <div>
      <div className="head">
        <h1>唔知食咩好?</h1>
      </div>
      <div className="container2">
        <h2>撳呢個就係我哋幫你揀!</h2>
        {drawnFood && (
          <div>
            <div id="name">{drawnFood.name}</div>
            <div id="price">This Price is ${drawnFood.price}</div>
            <div id="restaurant">This food is from {drawnFood.restaurant}</div>
          </div>
        )}
      </div>
      <div className="container2">
        <Button onClick={RandomFoodGenerator}>是但啦</Button>
        {clicked && (
          <div>
            <div id="food-animation">
              {foodList.map((food, index) =>
                // Conditionally render the food bubble based on whether it has been drawn or not
                (drawnFood && food === drawnFood) || !drawnFood ? (
                  <div
                    key={index}
                    className={`food-bubble${
                      food === drawnFood ? " food-bubble-random" : ""
                    }`}
                    style={{ backgroundColor: bubbleColors[index] }}
                  >
                    {food.name}
                  </div>
                ) : null
              )}
            </div>
          </div>
        )}
      </div>
      <div className="header">
        <Link to="/HomePage">
          <div className="backToHomeBtn">↩️ 返去主頁面</div>
        </Link>
      </div>
      <style jsx={true}>{`
        .head {
          background-image: linear-gradient(to right, #FF8EFF, 	#84C1FF);
        }
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
          background-image: linear-gradient(to right, #FF8EFF, 	#84C1FF);
        }
        `}</style>
    </div>
  );
}
