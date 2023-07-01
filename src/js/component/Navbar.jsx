import React from "react";

//navbar component
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark px-5">
      <div className="container-fluid">
        <a className="navbar-brand text-white">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active text-white" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link text-white-50" href="#">
              About
            </a>
            <a className="nav-link text-white-50" href="#">
              Services
            </a>
            <a className="nav-link text-white-50" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
