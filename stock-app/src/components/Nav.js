import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <nav>
      <Link style={linkStyle} to="/">
        <h3>iStocks</h3>
      </Link>
      <ul>
        <Link style={linkStyle} to="/stocks">
          <li>Home</li>
        </Link>
        {/* <Link style={linkStyle} to="/stocks:symbol">
          <li>Stocks</li>
        </Link> */}
        <Link style={linkStyle} to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
