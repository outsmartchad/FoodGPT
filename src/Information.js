import { Link } from "react-router-dom";

export default function Information() {
  return (
    <div>
      <p>This is Information page</p>
      <Link to="/HomePage">
        <div className="backToHomeBtn">↩️ 返去主頁面</div>\
      </Link>
    </div>
  );
}
