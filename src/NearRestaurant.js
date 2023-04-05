import { Link } from "react-router-dom";

export default function NearRestaurant() {
  return (
    <div>
      <div className="head">
        <h1>Near Restaurant</h1>
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
