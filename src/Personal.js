import { useState } from "react";

export default function Personal() {
  const [userData, setUserData] = useState({
    name: localStorage.getItem("username"),
    email: JSON.parse(localStorage.getItem("email")),
    age: JSON.parse(localStorage.getItem("age")),
    address: JSON.parse(localStorage.getItem("address")),
  });

  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    localStorage.setItem("username", userData.name);
    localStorage.setItem("email", JSON.stringify(userData.email));
    localStorage.setItem("age", JSON.stringify(userData.age));
    localStorage.setItem("address", JSON.stringify(userData.address));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="personal-container">
      <div className="title">
        <h1>個人資料</h1>
      </div>
      <div className="content-container">
        <div className="info">
          <p>
            <strong>姓名：</strong>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
              />
            ) : (
              <span>{userData.name}</span>
            )}
          </p>
          <p>
            <strong>電子郵件：</strong>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
              />
            ) : (
              <span>{userData.email}</span>
            )}
          </p>
          <p>
            <strong>年齡：</strong>
            {isEditing ? (
              <input
                type="number"
                name="age"
                value={userData.age}
                onChange={handleInputChange}
              />
            ) : (
              <span>{userData.age}</span>
            )}
          </p>
          <p>
            <strong>地址：</strong>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={userData.address}
                onChange={handleInputChange}
              />
            ) : (
              <span>{userData.address}</span>
            )}
          </p>
        </div>
        <div className="button-container">
          {isEditing ? (
            <div className="buttons">
              <button className="save-btn" onClick={handleSave}>
                保存
              </button>
              <button className="cancel-btn" onClick={handleCancel}>
                取消
              </button>
            </div>
          ) : (
            <div className="buttons">
              <button className="edit-btn" onClick={handleEdit}>
                編輯
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx={true}>{`
        .personal-container {
          background-image: linear-gradient(to right, #ff8eff, #84c1ff);
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          margin: 3rem auto;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }

        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
          background-image: linear-gradient(to right, #ff8eff, #84c1ff);
        }

        .title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 20px;
          color: #000;
        }

        .content-container {
          background-color: #ffffff;
          padding: 2rem;
          border-radius: 0 0 10px 10px;
        }

        .info {
          display: flex;
          flex-direction: column;
          text-align: left;
          margin-bottom: 1rem;
        }

        p {
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        strong {
          font-weight: bold;
          margin-right: 10px;
        }

        input[type="text"],
        input[type="email"],
        input[type="number"] {
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 1rem;
          width: 100%;
        }

        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="number"]:focus {
          outline: none;
          border-color: #0072ff;
        }

        .button-container {
          display: flex;
          justify-content: flex-end;
        }

        .buttons {
          display: flex;
        }

        button {
          padding: 10px 20px;
          font-size: 1rem;
          font-weight: bold;
          border-radius: 5px;
          cursor: pointer;
          border: none;
          outline: none;
          transition: background-color 0.3s;
        }

        .edit-btn {
          background-color: #0072ff;
          color: #ffffff;
        }

        .edit-btn:hover {
          background-color: #0058cc;
        }

        .save-btn {
          background-color: #4caf50;
          color: #ffffff;
        }

        .save-btn:hover {
          background-color: #39913c;
        }

        .cancel-btn {
          background-color: #f44336;
          color: #ffffff;
          margin-left: 10px;
        }

        .cancel-btn:hover {
          background-color: #cc2f2a;
        }
      `}</style>
    </div>
  );
}
