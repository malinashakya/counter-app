import React, { Component } from "react";

//shortcut to create stateless function sfc
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

//yo taala ko chai shortcut cc ani taala ko type le garda ni hunxa ani sfc type le garda ni correct

// class NavBar extends Component {
//   state = {};
//   render() {
