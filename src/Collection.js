import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Collection() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const localFavorites = localStorage.getItem("favorites");
    if (localFavorites) {
      setFavorites(JSON.parse(localFavorites));
    }
  }, []);

  return (
    <div>
      <div className="header2">
        <h1>收藏</h1>
      </div>
      {favorites.map((item, index) => (
        <div key={index} id={item.id} className="container2">
          <h2>{item.Name}</h2>
          <img src={item.Image} alt="rest photo" width="300px" />
          <p>{item.Area}</p>
        </div>
      ))}
      <div className="header">
        <Link to="/HomePage">
          <div className="backToHomeBtn">↩️ 返去主頁面</div>
        </Link>
      </div>
    </div>
  );
}
