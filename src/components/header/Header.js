import React, { useContext } from "react";
import logo from "../imgs/logo.jpg";
import baskett from "../imgs/basket.png";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

export default function Header() {
  const { basket, handleBasket, handleInput, drawSearch } = useContext(Context);

  const presEnter = (e) => {
    e.stopPropagation();
    if (e.key === "Enter") {
      drawSearch();
    }
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/" className="logiLink">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="navigation">
        <Link to="/blog">Blog </Link>
        <Link to="/about">About Us</Link>
      </div>
      <div>
        <input
          className="inputHeader"
          type="search"
          onKeyPress={(e) => presEnter(e)}
          onChange={(e) => handleInput(e)}
        />
      </div>

      <div className="basket" onClick={handleBasket}>
        <img src={baskett} alt="basket" />
        <div className="basketCount">{basket.length}</div>
      </div>
    </div>
  );
}
