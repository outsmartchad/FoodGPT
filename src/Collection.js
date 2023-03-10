import { Link } from "react-router-dom";

export default function Collection() {
  return (
    <div>
      <p>This is Collection page</p>

      <Link to="/HomePage">
        <div className="backToHomeBtn" name="angle left">
          ↩️ 返去主頁面
        </div>
      </Link>
    </div>
  );
}
