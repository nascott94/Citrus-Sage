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
              <Link className="nav-link1 topListItem" to="/projects">
                Projects
              </Link>
              <Link className="nav-link1 topListItem" to="/services">
                Services
              </Link>
              <Link className="nav-link1 topListItem" to="/about">
                About
              </Link>
              <Link className="nav-link1 topListItem" to="/testimonials">
                Testimonials
              </Link>
              <Link className="nav-link1 topListItem" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
