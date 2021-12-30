import React from "react";
import {Link } from 'react-router-dom';
function Header() {
  const ShowNavigation = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/' className="navbar-brand" >
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to = '/signup' className="nav-link">
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link to = '/signin' className="nav-link" >
                SignIn
              </Link>
            </li>
          </ul>
        </div>
    </nav>
  );

  return( 
  <header id = 'header'>
      <ShowNavigation/>
  </header>
  )
}

export default Header;
