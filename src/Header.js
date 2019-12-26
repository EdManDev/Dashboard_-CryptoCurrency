import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/first">First</Link>
            </li>
            <li>
              <Link to="/second">Second</Link>
            </li>
            <li>
              <Link to="/third">Third</Link>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
