import React, { useContext } from "react";
import "./Navbar.css";
import crypto_transparent from "../../assets/crypto_transparent.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "£" });
        break;
      case "inr":
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
        break;
    }
  };

  const scrollToTable = () => {
    document.getElementById("crypto-table").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <Link to={'/'}>
        <img src={crypto_transparent} alt="" className="logo" />
      </Link>
      <ul>
       <Link to={'/'}><li>Home</li></Link> 
        <li onClick={scrollToTable}>Features</li>
        <li onClick={scrollToTable}>Pricing</li>
        {/* <li onClick={scrollToTable}>Blog</li>  */}
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Sign up <img src={arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
