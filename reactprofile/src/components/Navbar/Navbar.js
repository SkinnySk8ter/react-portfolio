import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
     
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/portfolio">Porfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/resume">Resume</a>
          </li>

        </ul>
      </div>
    </nav>


    //  <div>
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="/portfolio">About</NavLink>
    //     <NavLink to="/resume">Contact</NavLink>
    //  </div>
  );
}

export default Navigation;