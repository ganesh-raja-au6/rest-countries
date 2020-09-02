import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="navbar-header">
            <h1>Where in the world?</h1>
          </div>
          <ul>
            <li> <i style={{marginRight : '10px'}} className="fa fa-moon-o"></i> Dark Mode</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
