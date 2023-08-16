import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <Link class="navbar-brand js-scroll-trigger" to="/">
          <span></span>
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul navbar-nav>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/">
                About
              </Link>
            </li>
            <br />
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/Education">
                Education
              </Link>
            </li>
            <br />
            <li>
              <Link className="nav-link js-scroll-trigger" to="/Skills">
                Skills
              </Link>
            </li>
            <br />
            <li>
              <Link className="nav-link js-scroll-trigger" to="/Interests">
                Interests
              </Link>
            </li>
            <br />
            <li>
              <Link className="nav-link js-scroll-trigger" to="/Experience">
                Experience
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
