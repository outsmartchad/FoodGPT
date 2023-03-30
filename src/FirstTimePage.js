import React from "react";
import { Link } from "react-router-dom";

export default function FirstTimePage() {
  return (
    <div>
      <div>
          <div className="header2">
            <p>First time?</p>
          </div>
          <img
            className="center"
            width="500"
            src={process.env.PUBLIC_URL + "/first-time-james-franco.gif"}
            alt="First Time?"
          />
          <div className="container">
            <p>
              <Link to="/Preference" className="YesUI">
                係呀
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/Homepage" className="NoUI">
                唔係
              </Link>
            </p>
          </div>

          <div className="container2">
            <h1>--FoodGPT-- 項目信息:</h1>
          </div>

          <div className="container3">
            <p>
              FoodGPT是一種搜尋HKCC附近食品的工具，考慮到忙碌的 HKCC
              學生的需求。
              它提供了當地餐館和食品店的綜合數據庫，包括有關菜單項目、價格等的詳細信息。此外，該應用程序具有多種過濾器和搜索選項，允許用戶根據他們的特定偏好和要求定制他們的食物搜索選項，使他們能夠輕鬆準確地找到正在尋找的東西。是尋求快速簡便地尋找美食的
              HKCC 學生的理想解決方案。
            </p>
            <p>**FoodGPT 向所有用戶免費開放</p>
          </div>
        </div>
    </div>
  );
}
