import { Link } from "react-router-dom";

export default function NewRestaurant() {
  return (
    <div>
      <p>This is NewRestaurant Info page</p>
      <Link to="/HomePage">
        <div className="backToHomeBtn">↩️ 返去主頁面</div>
      </Link>
    </div>
  );
}