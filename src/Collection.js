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
      <div className="head">
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

      <style jsx>{`
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
