import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
export default function RandomFood() {
  const foodList = [
    { id: 0, type: "港式", name: "譚仔三哥番茄湯雞肉魚蛋米線", price: 42 },
    { id: 1, type: "快餐", name: "KFC辣汁蘑菇香飯", price: 30 },
    { id: 2, type: "快餐", name: "Mcdonald's fish bao", price: 15 },
    { id: 3, type: "港式快餐", name: "雜扒鐵板餐", price: 70 },
    { id: 4, type: "酒樓", name: "金都樓酸辣湯", price: 60 },
    { id: 5, type: "港式茶餐廳", name: "鴻禧冰沙", price: 25 },
    { id: 6, type: "粥店", name: "皮蛋瘦肉粥", price: 35 },
    { id: 7, type: "中餐館", name: "宮保雞丁", price: 45 },
    { id: 8, type: "快餐店", name: "Subway 烤牛肉三文治", price: 35 },
    { id: 9, type: "日式料理", name: "壽司卷", price: 50 },
    { id: 10, type: "西餐", name: "牛扒配薯條", price: 90 },
    { id: 11, type: "韓式料理", name: "石鍋拌飯", price: 55 },
    { id: 12, type: "泰式料理", name: "冬蔭功湯", price: 40 },
    { id: 13, type: "甜品店", name: "芒果班戟", price: 28 },
    { id: 14, type: "素食", name: "香菇菠菜炒飯", price: 30 },
    { id: 15, type: "自助餐", name: "皇朝自助餐", price: 150 },
    { id: 16, type: "港式茶餐廳", name: "鮮奶花生多士", price: 18 },
    { id: 17, type: "酒樓", name: "蒜蓉粉絲蒸蟹", price: 180 },
    { id: 18, type: "中餐館", name: "叉燒飯", price: 35 },
  ];
  const [randomIndex, setRandomIndex] = useState(0);

  function RandomFoodGenerator() {
    const randindex = Math.floor(Math.random() * foodList.length);
    setRandomIndex(randindex);
    console.log(foodList[randindex]);
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
      <div id="name">{foodList[randomIndex].name}</div>
    </div>
  );
}
