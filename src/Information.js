import { Link } from "react-router-dom";

export default function Information() {
  return (
    <div>
      <div className="head">
        <h1>消息</h1>
      </div>
      <div className="container2">
      <h2>百台餐廳 四大時段特價優惠 餐牌價錢 50 % off</h2><h2>17:52</h2>
      </div>
      <div className="container2">
      <h2>麥當勞消費券優惠2023│麥當勞App消費券攻略！7大震撼優惠 $1飲港式奶茶/大可樂/$21醒晨超值選🍔☕🥤</h2><h2>12:52</h2>
      </div>
      <div className="container2">
      <h2>牛角燒肉優惠半價起！指定時段入座　追加18款燒肉、生啤買一送一🍻</h2><h2>11:52</h2>
      </div>
      <div className="container2">
      <h2>海雲天3小時片皮鴨中菜放題！任食酸菜魚/燒腩仔/點心 每位送龍蝦🦞🦞</h2><h2>09:52</h2>
      </div>
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
