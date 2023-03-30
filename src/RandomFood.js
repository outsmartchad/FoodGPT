import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import "./randomFood.css"; // Import the CSS file

export default function RandomFood() {
  const [foodList, setFoodList] = useState([]);
  useEffect(() => {
    fetch("https://manofdiligence.github.io/FoodList.json")
      .then((response) => response.json())
      .then((data) => setFoodList(data));
  }, []);

  const [randomIndex, setRandomIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  function RandomFoodGenerator() {
    const randindex = Math.floor(Math.random() * foodList.length);
    setRandomIndex(randindex);
    setClicked(true);
    console.log(foodList[randindex]);
  }

  return (
    <div>
      <div className="header2">
        <h1>唔知食咩好?</h1>
      </div>
      <div className="container2">
      <h2>撳呢個就係我哋幫你揀!</h2>
      </div>
      <div className="container2">
      <Button onClick={RandomFoodGenerator}>Food</Button>
      {clicked && (
        <div>
          <div id="food-animation">
            {foodList.map((food, index) => (
              <div key={index} className="food-bubble">
                {food.name}
              </div>
            ))}
            <div className="food-bubble food-bubble-random">
              {foodList[randomIndex].name}
            </div>
          </div>
          <div id="name">{foodList[randomIndex].name}</div>
          <div id="price">This Price is ${foodList[randomIndex].price}</div>
          <div id="restaurant">
            This food is from {foodList[randomIndex].restaurant}
          </div>
        </div>
      )}
      </div>
      <div className="header">
      <Link to="/HomePage">
        <div className="backToHomeBtn">↩️ 返去主頁面</div>
      </Link>
      </div>
    </div>
  );
}
