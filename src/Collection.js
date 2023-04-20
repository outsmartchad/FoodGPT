import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Collection() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
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
        <div key={index} className="container2">
          <h2>{item.name}</h2>
          <h2>{item.type}</h2>
          <img
            src={item.image}
            alt="rest photo"
            width="300px"
            onClick={() =>
              navigate("/Restaurant", { state: { Restaurant: item } })
            }
          />
          <h2>{item.district}</h2>
          <h2>{item.address}</h2>
        </div>
      ))}
      <div className="header">
        <Link to="/HomePage">
          <div className="backToHomeBtn">↩️ 返去主頁面</div>
        </Link>
      </div>

      <style jsx={true}>{`
        .head {
          background-image: linear-gradient(to right, #ff8eff, #84c1ff);
        }
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
          background-image: linear-gradient(to right, #ff8eff, #84c1ff);
        }
      `}</style>
    </div>
  );
}
