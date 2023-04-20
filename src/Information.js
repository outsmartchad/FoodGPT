import { Link } from "react-router-dom";

export default function Information() {
  return (
    <div>
      <div className="head">
        <h1>消息</h1>
      </div>
      <div className="container2">
        <h2>百台餐廳 四大時段特價優惠 餐牌價錢 50 % off</h2>
        <h2>17:52</h2>
      </div>
      <div className="container2">
        <a href="https://hk.news.yahoo.com/%E9%BA%A5%E7%95%B6%E5%8B%9E%E5%84%AA%E6%83%A0-app-%E9%BA%A5%E7%95%B6%E5%8B%9E-%E6%B6%88%E8%B2%BB%E5%88%B8-%E5%84%AA%E6%83%A0-%E6%94%BB%E7%95%A5-004912562.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAGBHXYw1gULjgjT15xvbUN7D8HdH7iULRDKHexV2mwpwdaKFDWXuEKRbayXICtxRY-SWJ2aXIA4fO7jOg_KeHlR0ULIeJIItYww_IvpaqQCEBtMF50WAkjb4X3a_coALBysSasAUC5l63Q5UA1Mtzt2_Ydt6s50pxZwGOgWYu1yQ">
          <h2>
            麥當勞消費券優惠2023│麥當勞App消費券攻略！7大震撼優惠
            $1飲港式奶茶/大可樂/$21醒晨超值選🍔☕🥤
          </h2>
        </a>
        <h2>12:52</h2>
      </div>
      <div className="container2">
        <a href="https://www.hk01.com/%E9%A3%9F%E7%8E%A9%E8%B2%B7/887036/%E7%89%9B%E8%A7%92%E7%87%92%E8%82%89%E5%84%AA%E6%83%A0%E5%8D%8A%E5%83%B9%E8%B5%B7-%E6%8C%87%E5%AE%9A%E6%99%82%E6%AE%B5%E5%85%A5%E5%BA%A7-%E8%BF%BD%E5%8A%A018%E6%AC%BE%E7%87%92%E8%82%89-%E7%94%9F%E5%95%A4%E8%B2%B7%E4%B8%80%E9%80%81%E4%B8%80">
          <h2>
            牛角燒肉優惠半價起！指定時段入座　追加18款燒肉、生啤買一送一🍻
          </h2>
        </a>
        <h2>11:52</h2>
      </div>
      <div className="container2">
        <a href="https://www.hk01.com/%E9%A3%9F%E7%8E%A9%E8%B2%B7/882852/%E6%B5%B7%E9%9B%B2%E5%A4%A93%E5%B0%8F%E6%99%82%E7%89%87%E7%9A%AE%E9%B4%A8%E4%B8%AD%E8%8F%9C%E6%94%BE%E9%A1%8C-%E4%BB%BB%E9%A3%9F%E9%85%B8%E8%8F%9C%E9%AD%9A-%E7%87%92%E8%85%A9%E4%BB%94-%E9%BB%9E%E5%BF%83-%E6%AF%8F%E4%BD%8D%E9%80%81%E9%BE%8D%E8%9D%A6">
          <h2>
            海雲天3小時片皮鴨中菜放題！任食酸菜魚/燒腩仔/點心 每位送龍蝦🦞🦞
          </h2>
        </a>
        <h2>09:52</h2>
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
