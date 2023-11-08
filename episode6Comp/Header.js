import { useState } from "react";
import {LOGO_URL} from "../utils/constant"

const Header = () =>{


  const [btn , setBtn] = useState("Login");

    return(
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="Logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
                  btn === "Login" ?  setBtn("Logout") : setBtn("Login");
            }}
            >{btn}</button>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;

  
