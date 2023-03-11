import React from "react";
import { Link } from "react-router-dom";

export default function FirstTimePage() {
  return (
    <div>
      <div>
        <div class="card">
         <div class="header">
            <h1>First time?</h1>
         </div>

          <div class="container">
             <p>
             <Link to="/Preference" className="YesUI">係呀</Link>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/Homepage" className="NoUI">唔係</Link>
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}
