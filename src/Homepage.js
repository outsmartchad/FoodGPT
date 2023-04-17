import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("黃埔");
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showCreateAcPopup, setShowCreateAcPopup] = useState(false);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [area, setArea] = useState([]);
  const [data, setData] = useState([]);
  const [dummyRestData, setDummyRestData] = useState([]);

  const [loggedIn, setLoggedIn] = useState(() => {
    return localStorage.getItem("loggedIn") === "true";
  });
  const [username, setUsername] = useState(() => {
    const localusername = localStorage.getItem("username");
    return localusername ? JSON.parse(localusername) : "";
  });

  const handleUserLogin = () => {
    // Add your login logic here
    setShowLoginPopup(true);
  };
  const handleCreateAc = () => {
    // Add your login logic here
    setShowCreateAcPopup(true);
  };
  const handleLogin = () => {
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (!email || !password) {
      alert("你未填帳號密碼!");
      return;
    }

    setLoggedIn(true);
    setUsername(emailInputRef.current.value);
    localStorage.setItem("loggedIn", JSON.stringify(true));
  };
  const handleLogout = () => {
    // Add your logout logic here
    setLoggedIn(false);
    localStorage.setItem("loggedIn", JSON.stringify(false));
    setShowCreateAcPopup(false);
    setShowLoginPopup(false);
    setUsername("");
  };

  const handleCreateAccountSubmit = () => {
    // Add your create account submit logic here
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (!email || !password) {
      alert("你未填帳號密碼!");
      return;
    }

    setLoggedIn(true);
    setUsername(emailInputRef.current.value);
    localStorage.setItem("loggedIn", JSON.stringify(true));
  };
  const [favorites, setFavorites] = useState(() => {
    const localFavorites = localStorage.getItem("favorites");
    return localFavorites ? JSON.parse(localFavorites) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://manofdiligence.github.io/Restaurant.json")
      .then((response) => response.json())
      .then((result) => (setDummyRestData(result), setData(result["黃埔"])))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("https://manofdiligence.github.io/Areas.json")
      .then((response) => response.json())
      .then((result) => setArea(result))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(username));
  }, [username]);
  useEffect(() => {
    localStorage.setItem("login", loggedIn);
  }, [loggedIn]);
  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };
  const toggleCreateAcPopup = () => {
    setShowCreateAcPopup(!showCreateAcPopup);
  };
  const handleSelectChange = (eventKey) => {
    console.log(eventKey);
    setData(dummyRestData[eventKey]);
    setSelectedOption(eventKey);
  };

  const toggleFavorite = (restaurant) => {
    const isFavorite = favorites.some((fav) => fav.name === restaurant.name);
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.name !== restaurant.name));
    } else {
      setFavorites([...favorites, restaurant]);
    }
  };

  return (
    <div>
      <div>
        <DropdownButton title={selectedOption} onSelect={handleSelectChange}>
          {area.map((item, index) => (
            <Dropdown.Item key={index} eventKey={item} value={item}>
              {item}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
      <div className="Login">
        {loggedIn ? (
          <div>
            <span>{username}</span>
            <Button onClick={handleLogout}>登出</Button>
          </div>
        ) : (
          <div>
            <Button onClick={handleCreateAc}>建立帳戶</Button>
            {showCreateAcPopup && (
              <>
                <div className="fullscreen" onClick={toggleCreateAcPopup}></div>
                <div id="Loginpopup" className="visibleArea">
                  {/* Add your create account form here */}
                  <h1>登入</h1>
                  <input type="text" placeholder="用戶名" ref={emailInputRef} />
                  <h1></h1>
                  <input
                    type="password"
                    placeholder="密碼"
                    ref={passwordInputRef}
                  />
                  <h1></h1>
                  <Button onClick={handleCreateAccountSubmit}>
                    <h1>{"就咁囉"}</h1>
                  </Button>
                </div>
              </>
            )}
            <Button onClick={handleUserLogin}>登入</Button>
            {showLoginPopup && (
              <>
                <div className="fullscreen" onClick={toggleLoginPopup}></div>
                <div id="Loginpopup" className="visibleArea">
                  {/* Add your create account form here */}
                  <h1>登入</h1>
                  <input type="text" placeholder="用戶名" ref={emailInputRef} />
                  <h1></h1>
                  <input
                    type="password"
                    placeholder="密碼"
                    ref={passwordInputRef}
                  />
                  <h1></h1>
                  <Button onClick={handleLogin}>
                    <h1>{"登入"}</h1>
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <div className="header">
        <div className="search-bar">
          <input
            type="text"
            placeholder="搜索餐廳"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="container2">
        <Link to="/NearRestaurant">
          <img width="100" src={process.env.PUBLIC_URL + "/c1.png"} alt="c1" />
        </Link>
        <h2>附近餐廳</h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/RankingClass">
          <img width="80" src={process.env.PUBLIC_URL + "/c3.png"} alt="c3" />
        </Link>
        <h2>餐廳排名</h2>
      </div>
      <div>
        <h2>餐廳資訊</h2>
      </div>
      <div>
        {data
          .filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item, index) => {
            const isFavorite = favorites.some((fav) => fav.name === item.name);
            return (
              <div key={index} className="container2">
                <h2>{item.name}</h2>
                <h2>{item.type}</h2>

                <img
                  src={item.image}
                  alt="rest photo"
                  width="300px"
                  onClick={() =>
                    navigate("/Restaurant", { state: { Restaurant: item } })
                  }
                />

                <h2>{item.district}</h2>
                <h2>{item.address}</h2>

                <button onClick={() => toggleFavorite(item)}>
                  {isFavorite ? "⭐️" : "★"}
                </button>
              </div>
            );
          })}
      </div>
      <div>
        <style jsx={true}>
          {" "}
          {`
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
              background-image: linear-gradient(to right, #ff8eff, #84c1ff);
            }

            .header {
              display: flex;
              justify-content: center;
              margin: 20px 0;
            }

            .search-bar {
              width: 50%;
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .search-bar input {
              width: 100%;
              padding: 10px;
              font-size: 18px;
              border: 1px solid #ccc;
              border-radius: 5px;
              box-sizing: border-box;
            }
            .container2 {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-around;
              background-color: #fff;
              border-radius: 8px;
              margin: 10px 0;
              padding: 20px;
            }

            h2 {
              margin: 0;
            }

            p {
              margin: 0;
            }

            img {
              border-radius: 8px;
            }

            button {
              background-color: transparent;
              border: none;
              font-size: 24px;
              cursor: pointer;
            }

            button:focus {
              outline: none;
            }
          `}
        </style>
      </div>
    </div>
  );
}
