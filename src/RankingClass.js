import { Link } from "react-router-dom";

export default function RankingClass() {
  return (
    <div>
      <p>This is RankingClass Info page</p>
      <Link to="/HomePage">
        <div className="backToHomeBtn">↩️ 返去主頁面</div>
      </Link>
    </div>
  );
}