import { Link } from "react-router-dom";

export default function NearRestaurant() {
  return (
    <div>
      <div className="head">
        <h1>附近餐廳</h1>
      </div>
      <div className="container2"></div>
      <div className="container2"></div>
      <div className="container2"></div>
      <div className="container2"></div>
      <div className="header">
        <Link to="/HomePage">
          <div className="backToHomeBtn">↩️ 返去主頁面</div>
        </Link>
      </div>
      <style jsx>{`
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
