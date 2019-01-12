import React from "react";
import "./style.css";

const Nav = props =>

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light justify-content-between">
    <a className="navbar-brand" href="/">Dog Gone It!</a>
    <ul className="navbar-nav">
      <li id= "message">{props.message}</li>
    </ul>
    <ul className="navbar-nav">
      <li>Score: {props.score} | Top Dog Score: {props.highScore}</li>
    </ul>
  </nav>

export default Nav;
