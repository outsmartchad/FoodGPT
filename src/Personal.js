import { Link } from "react-router-dom";
import { useState } from "react";

export default function Personal() {
  const [showMenu1, setShowMenu1] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [showMenu3, setShowMenu3] = useState(false);
  const [showMenu4, setShowMenu4] = useState(false);

  const handleMenuClick = (menuNumber) => {
    switch (menuNumber) {
      case 1:
        setShowMenu1(!showMenu1);
        break;
      case 2:
        setShowMenu2(!showMenu2);
        break;
      case 3:
        setShowMenu3(!showMenu3);
        break;
      case 4:
        setShowMenu4(!showMenu4);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="header2">
        <h1>個人資料</h1>
      </div>
      <div className="container2">
      <button onClick={() => handleMenuClick(1)}>Menu 1</button>
      {showMenu1 && (
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
      </div>
      <div className="container2">
      <button onClick={() => handleMenuClick(2)}>Menu 2</button>
      {showMenu2 && (
        <ul>
          <li>Option 4</li>
          <li>Option 5</li>
          <li>Option 6</li>
        </ul>
      )}
      </div>
      <div className="container2">
      <button onClick={() => handleMenuClick(3)}>Menu 3</button>
      {showMenu3 && (
        <ul>
          <li>Option 7</li>
          <li>Option 8</li>
          <li>Option 9</li>
        </ul>
      )}
      </div>
      <div className="container2">
      <button onClick={() => handleMenuClick(4)}>Menu 4</button>
      {showMenu4 && (
        <ul>
          <li>Option 10</li>
          <li>Option 11</li>
          <li>Option 12</li>
        </ul>
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