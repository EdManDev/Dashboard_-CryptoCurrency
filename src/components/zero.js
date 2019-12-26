import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class zero extends Component {
  render() {
    return (
      <div>
        <Link to="/one">one</Link> <Link to="/two">two</Link>
        <h1>Zero</h1>
      </div>
    );
  }
}
