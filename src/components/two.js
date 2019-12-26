import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class two extends Component {
  render() {
    return (
      <div>
        <Link to="/">back</Link>
        <h1>two</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quam
          harum facilis, nam ab, iusto non maxime laudantium expedita quae fugit
          et magni praesentium vitae tempora porro corrupti delectus distinctio.
        </p>
      </div>
    );
  }
}
