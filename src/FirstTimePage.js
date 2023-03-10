import React from "react";
import HomePage from "./Homepage";
import { Link } from "react-router-dom";
import Preference from "./Preference";

export default function FirstTimePage() {
  return (
    <div>
      <div>
        <p>First time?</p>
        {/* to create a famous meme */}
        <img
          src={process.env.PUBLIC_URL + "/first-time-james-franco.gif"}
          alt="First Time?"
        />
        <br></br>
        <Link to="/Preference">係呀...唔好整咁多色水</Link>
        <br></br>
        <br></br>
        <Link to="/Homepage">關你咩事呢毒撚</Link>
      </div>
    </div>
  );
}
