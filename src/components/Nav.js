import React, {Component} from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default class Nav extends Component {
    render(){
  return (
    <nav>
      <ul className="nav-links">
        <li>
            <Link  to="/"> Home</Link>
        </li>
        <li>
            <Link to="/forecast">Forecast</Link>
        </li>

      </ul>
    </nav>
  );
}
}