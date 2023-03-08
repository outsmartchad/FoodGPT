import { Link } from "react-router-dom";

export default function Collection() {
  return (
    <div>
      <p>This is Collection page</p>

      <Link to="/">
        <div className="backToHomeBtn">↩️ 返去主頁面</div>
      </Link>
    </div>
  );
}
