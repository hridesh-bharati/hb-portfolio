import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Navbar() {
  const myFunction = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  };

  // Add event listener for scrolling
  useEffect(() => {
    window.addEventListener('scroll', myFunction);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', myFunction);
    };
  }, []);

  return (
    <>
      {/* Header with Progress Bar */}
      <div className="header">
        <div className="progress-container">
          <div className="progress-bar" id="myBar"></div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg p-0 navbar-dark bg-dark position-fixed w-100">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sourse/code">soursecode</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/All_projects">All_projects</Link>
              </li>
          
            </ul>
            <button className="btn btn-primary mt-3" type="submit">Login</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
