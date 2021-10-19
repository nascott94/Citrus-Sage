import * as React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div id="top-header">
        <div className="container clearfix"></div>
      </div>
      <div className="top">
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="nav-link1 topListItem" to="/">
                Home
              </Link>
              <Link className="nav-link1 topListItem" to="/me">
                Profile
              </Link>
              <Link className="nav-link1 topListItem" to="/signup">
                Sign Up
              </Link>
              <Link className="nav-link1 topListItem" to="/login">
                Login
              </Link>
              <Link className="nav-link1 topListItem" to="/">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
