import React from "react";
import "./Nav.css";

const Nav = props => (
<nav className="nav"> {props.children}
  <a className="nav-link active" href="#">Active</a>
  <a className="nav-link" href="#">Link</a>
  <a className="nav-link" href="#">Link</a>
  <a className="nav-link disabled" href="#">Disabled</a>
</nav>
);
export default Nav;
