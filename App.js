import "./index.css";
import React from "react";
import { Routes, BrowserRouter, Link, Route } from "react-router-dom";
import HomePage from "./Homepage";
import RandomFood from "./RandomFood";
import Collection from "./Collection";
import Personal from "./Personal";
import Information from "./Information";
import FirstTimePage from "./FirstTimePage";
import Preference from "./Preference";
import NewRestaurant from "./NewRestaurant";
import EatInfo from "./EatInfo";
import RankingClas from "./RankingClass";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* This is the navigation bar in our app */}
        <div className="navbar-wrapper">
          <nav>
            <Link to="/HomePage" className="darkOtherUI">
              主頁面
            </Link>
            <Link to="/Collection" className="darkOtherUI">
              收藏
            </Link>
            <Link to="/RandomFood" className="darkRanUI ranUI">
              是但一餐啦...
            </Link>
            <Link to="/Information" className="darkOtherUI">
              消息
            </Link>
            <Link to="/Personal" className="darkOtherUI">
              個人資料
            </Link>
          </nav>
        </div>

        {/* To create a path-to-page in our whole app 
        <Routes> can be accessed by even other js file*/}
        <Routes>
          <Route path="/" element={<FirstTimePage />} />
          <Route path="/Preference" element={<Preference />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Collection" element={<Collection />} />
          <Route path="/RandomFood" element={<RandomFood />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/Personal" element={<Personal />} />
          <Route path="/NewRestaurant" element={<NewRestaurant />} />
          <Route path="/EatInfo" element={<EatInfo />} />
          <Route path="/RankingClass" element={<RankingClas />} />          
          <Route path="*" element={<p>找不到頁面</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
