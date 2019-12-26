import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class one extends Component {
  render() {
    return (
      <div>
        <Link to="/">back</Link>
        <h1>one</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
          dignissimos veritatis magni error porro ad excepturi voluptatum saepe
          labore et odio officia maiores ipsum quaerat, consequuntur eius eaque
          est fugit.
        </p>
      </div>
    );
  }
}
