import { Link } from "react-router-dom";

export default function Information() {
  return (
    <div>
      <div className="head">
        <h1>消息</h1>
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

      <style jsx={true}>{`
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
