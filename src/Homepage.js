import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// array for storing all the area in Hong Kong
const areas = [
  "Central and Western",
  "Eastern",
  "Islands",
  "Kowloon City",
  "Kwai Tsing",
  "Kwun Tong",
  "North",
  "Sai Kung",
  "Sha Tin",
  "Sham Shui Po",
  "Southern",
  "Tai Po",
  "Tsuen Wan",
  "Tuen Mun",
  "Wan Chai",
  "Wong Tai Sin",
  "Yau Tsim Mong",
  "Yuen Long",
];
export default function HomePage() {
  // Default value for the dropdown: Area
  // setSelectedOption is a arrow function
  // that set the default "state" to be the selectionOption's value
  const [selectedOption, setSelectedOption] = useState("Area");

  // change the dropdown's title whenever the user selected other area
  const handleSelectChange = (eventKey) => {
    const selectedValue = eventKey;
    setSelectedOption(selectedValue);
    // print to see whether we get the value that chosen by the user
    console.log(selectedValue); // You can replace this with your desired function to handle the selected area
  };
  return (
    <div>
      <div>
        {/* created a dropdown and title it by user choice */}
        <DropdownButton title={selectedOption} onSelect={handleSelectChange}>
          {/* to get each element in the area array 
          and put it as a dropdown item component */}
          {areas.map((area, index) => (
            <Dropdown.Item key={index} eventKey={area}>
              {area}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
      <div className="card">
        <div className="header">
          {/* Search Bar class */}
          <h1>search bar here</h1>
        </div>

        <div className="container">
          {/* new restaurant,  eat info, eat comment, ranking class*/}
          <p>
            <Link to="/NewRestaurant">
              <img
                width="100"
                src={process.env.PUBLIC_URL + "/c1.png"}
                alt="c1"
              />
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/EatInfo">
              <img
                width="60"
                src={process.env.PUBLIC_URL + "/c2.png"}
                alt="c2"
              />
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/RankingClass">
              <img
                width="80"
                src={process.env.PUBLIC_URL + "/c3.png"}
                alt="c3"
              />
            </Link>
          </p>
        </div>
        {/* restaurant info class */}
        <div>
          <h2>餐廳資訊</h2>
        </div>
        <div className="container2">
          {/*  restaurant info generator */}
          <div className="rcorners1">
            ############################################################
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="rcorners1">
            ############################################################
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="rcorners1">
            ############################################################
          </div>
        </div>
        <div className="container2">
          {/*  restaurant info generator */}
          <div className="rcorners1">
            ############################################################
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="rcorners1">
            ############################################################
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="rcorners1">
            ############################################################
          </div>
        </div>
        <div className="container2">
          {/*  restaurant info generator */}
          <div className="rcorners1">
            ############################################################
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="rcorners1">
            ############################################################
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="rcorners1">
            ############################################################
          </div>
        </div>
      </div>
    </div>
  );
}
