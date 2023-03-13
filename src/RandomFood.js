import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
export default function RandomFood() {
  const foodList = [
    {
      id: 0,
      type: "港式",
      name: "譚仔三哥番茄湯雞肉魚蛋米線",
      price: 42,
      restaurant: "譚仔三哥",
    },
    {
      id: 1,
      type: "快餐店",
      name: "KFC辣汁蘑菇香飯",
      price: 30,
      restaurant: "KFC",
    },
    {
      id: 2,
      type: "快餐店",
      name: "Mcdonald's fish bao",
      price: 15,
      restaurant: "麥當勞",
    },
    {
      id: 3,
      type: "港式快餐",
      name: "雜扒鐵板餐",
      price: 70,
      restaurant: "小龍坎",
    },
    { id: 4, type: "酒樓", name: "清蒸鮮魚", price: 150, restaurant: "名寶樓" },
    {
      id: 5,
      type: "酒樓",
      name: "糯米雞",
      price: 80,
      restaurant: "四季煲仔飯",
    },
    {
      id: 6,
      type: "港式茶餐廳",
      name: "奶茶",
      price: 18,
      restaurant: "鴻星茶餐廳",
    },
    {
      id: 7,
      type: "港式茶餐廳",
      name: "燒賣",
      price: 25,
      restaurant: "添好運",
    },
    {
      id: 8,
      type: "粥店",
      name: "皮蛋瘦肉粥",
      price: 22,
      restaurant: "泰昌餅家",
    },
    {
      id: 9,
      type: "中餐館",
      name: "葱爆牛肉",
      price: 68,
      restaurant: "蘇浙匯",
    },
    {
      id: 10,
      type: "快餐店",
      name: "Popeyes雞腿堡",
      price: 25,
      restaurant: "Popeyes",
    },
    { id: 11, type: "日式料理", name: "生魚片", price: 90, restaurant: "鮨山" },
    {
      id: 12,
      type: "日式料理",
      name: "壽司",
      price: 50,
      restaurant: "鮨処鮨心",
    },
    {
      id: 13,
      type: "西餐",
      name: "牛肉漢堡",
      price: 85,
      restaurant: "The Butchers Club",
    },
    { id: 14, type: "西餐", name: "意大利麵", price: 95, restaurant: "Joia" },
    {
      id: 15,
      type: "韓式料理",
      name: "石鍋拌飯",
      price: 70,
      restaurant: "春川韓式料理",
    },
    {
      id: 16,
      type: "港式茶餐廳",
      name: "菠蘿油",
      price: 18,
      restaurant: "香港得記",
    },
    {
      id: 17,
      type: "港式茶餐廳",
      name: "煙肉蛋治",
      price: 28,
      restaurant: "茶餐廳",
    },
    {
      id: 18,
      type: "韓式料理",
      name: "炸雞排飯",
      price: 48,
      restaurant: "韓式炸雞大王",
    },
    {
      id: 19,
      type: "韓式料理",
      name: "海鮮煎餅",
      price: 32,
      restaurant: "韓式小食店",
    },
    {
      id: 20,
      type: "港式茶餐廳",
      name: "叉燒飯",
      price: 28,
      restaurant: "金華冰廳",
    },
    {
      id: 21,
      type: "韓式料理",
      name: "石鍋拌飯",
      price: 48,
      restaurant: "韓式家庭餐廳",
    },
    {
      id: 22,
      type: "西餐",
      name: "牛肉漢堡",
      price: 68,
      restaurant: "Caliburger",
    },
  ];
  const [randomIndex, setRandomIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  function RandomFoodGenerator() {
    const randindex = Math.floor(Math.random() * foodList.length);
    setRandomIndex(randindex);
    setClicked(true);
    console.log(foodList[randindex].name);
  }
  return (
    <div>
      <p>This is Random Food Generator Page</p>
      <Link to="/HomePage">
        <div className="backToHomeBtn">↩️ 返去主頁面</div>
      </Link>
      <h1>Don't know eat what?</h1>
      <h2>Press this button</h2>
      <Button onClick={RandomFoodGenerator}>Food</Button>
      {clicked && (
        <div>
          <div id="name">{foodList[randomIndex].name}</div>
          <div id="price">This Price is ${foodList[randomIndex].price}</div>
          <div id="restaurant">
            This food is from {foodList[randomIndex].restaurant}
          </div>
        </div>
      )}
    </div>
  );
}
