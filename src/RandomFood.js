import { Link } from "react-router-dom";

export default function RandomFood() {
  return (
    <div>
      <p>This is Random Food Generator Page</p>
      <Link to="/HomePage">
        <div className="backToHomeBtn">↩️ 返去主頁面</div>
      </Link>
    </div>
  );
}
