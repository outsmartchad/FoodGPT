import { useState } from "react";

export default function Personal() {
  const [userData, setUserData] = useState({
    name: "So Chi Wang",
    email: "Sogo@example.com",
    age: 20,
    address: "35 BARKER ROAD"
  });

  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="personal-container">
      <div className="header">
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
      <style jsx>{`
        .personal-container {
          background-image: url("/background-image.jpg");
          background-size: cover;
          background-position: center;
          color: #000000;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }

        .header {
          padding: 2rem;
          background: linear-gradient(to bottom right, #00FF00, #00FF00);
          text-align: center;
          font-size: 
16px;
font-weight: bold;
}
.content-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 3rem;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

p {
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

strong {
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="number"] {
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="number"]:focus {
  outline: none;
  border: 2px solid #00FF00;
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
}

.edit-btn,
.save-btn {
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  background-color: #00FF00;
  color: #fff;
  border: none;
  cursor: pointer;
}

.edit-btn:hover,
.save-btn:hover {
  background-color: #006666;
}

.cancel-btn {
  padding: 0.5rem 1rem;
  background-color: #00FF00;
  color: #fff;
  border: 2px solid #00FF00;
  cursor: pointer;
}

.cancel-btn:hover {
  background-color: #006666;
  color: #fff;
}
`}</style>
</div>
);
}
