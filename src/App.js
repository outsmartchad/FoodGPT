import "./App.css";
import React from "react";
import { Routes, BrowserRouter, Link, Route } from "react-router-dom";
import HomePage from "./Homepage";
import RandomFood from "./RandomFood";
import Collection from "./Collection";
import Personal from "./Personal";
import Information from "./Information";
import "./index.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="navbar-wrapper">
          <nav>
            <Link to="/" className="darkOtherUI">
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

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Collection" element={<Collection />} />
          <Route path="/RandomFood" element={<RandomFood />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/Personal" element={<Personal />} />
          <Route path="*" element={<p>找不到頁面</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
