import { Link } from "react-router-dom";

export default function NearRestaurant() {
  return (
    <div>
      <div className="header2">
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
    </div>
  );
}
