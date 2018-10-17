import React from "react";
import "./Nav.css";

const Nav = props => (
<nav className="nav row"> {props.children}
  <div className="col sm-4">
  <p><h1>Click any image to begin</h1></p>
  </div>
  <div className="col sm-4">
  <p><h1>Clicky Game!</h1></p>
  </div>
  <div className="col sm-4">
  <p><h1>Score: </h1></p>
  </div>
</nav>
);
export default Nav;
