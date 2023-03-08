import { Link } from "react-router-dom";

export default function Personal() {
  return (
    <div>
      <p>This is Personal Info page</p>
      <Link to="/">
        <div className="backToHomeBtn">↩️ 返去主頁面</div>
      </Link>
    </div>
  );
}
