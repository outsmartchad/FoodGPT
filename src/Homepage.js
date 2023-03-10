import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
  const [selectedOption, setSelectedOption] = useState("Area");
  const handleSelectChange = (eventKey) => {
    const selectedValue = eventKey;
    setSelectedOption(selectedValue);

    console.log(selectedValue); // You can replace this with your desired function to handle the selected area
  };
  return (
    <div>
      <div>
        <DropdownButton title={selectedOption} onSelect={handleSelectChange}>
          {areas.map((area, index) => (
            <Dropdown.Item key={index} eventKey={area}>
              {area}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>

      <div>
        <h1>search bar here</h1>
      </div>
      <p>This is FoodGPT Home page</p>
    </div>
  );
}
