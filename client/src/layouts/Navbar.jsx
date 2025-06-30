import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import Email from "../components/Email";


const Navbar = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector(".navbar");
      navbar.classList.toggle("slidedown", window.scrollY > 200);
      navbar.classList.toggle("hide", window.scrollY > 1200);
    });
  }, []);

  useEffect(() => {
    if (pathname) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

 const apply=()=>{
    
 }
  return (
    <div className="p-3 ">
      <div className="container-fluid">
        <ul
          className="head-items"
          style={{
            color: pathname === "/" ? "white" : "black",
          }}
        >
          <li className="head-item">
            <i className="fa-solid fa-location-dot"></i>Madhyapur Thimi - 07
          </li>
          <li className="head-item">
            <i className="fa-solid fa-phone-volume"></i>01-6638441
          </li>
          <li className="head-item d-flex align-items-center">
            <i className="fa-solid fa-envelope"></i>
            <div className="pointer">
              <Email />
            </div>
          </li>
        </ul>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light  rounded shadow-sm ">
        <div className="container">
          <button
            className="navbar-toggler mb-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/" ? "active fw-bold" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/about" ? "active fw-bold" : ""
                  }`}
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/academics" ? "active fw-bold" : ""
                  }`}
                  aria-current="page"
                  to="academics"
                >
                  Academics
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/admission" ? "active fw-bold" : ""
                  }`}
                  aria-current="page"
                  to="/admission"
                >
                  Admission
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/services" ? "active fw-bold" : ""
                  }`}
                  aria-current="page"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/contact" ? "active fw-bold" : ""
                  }`}
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/beyond-academics" ? "active fw-bold" : ""
                  }`}
                  aria-current="page"
                  to="/beyond-academics"
                >
                  Beyond Academics
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/news-events" ? "active fw-bold" : ""
                  }`}
                  aria-current="page"
                  to="/news-events"
                >
                  News
                </Link>
              </li>

              <li className="nav-item mx-2">
                <button className="btn nav-btn" onClick={apply()}>
                  Apply Now
                </button>
              </li>
            </ul>
            <Link to="/" className="navbar-brand">
              <div className="banner">
                <i className="fa-solid fa-bookmark"></i>
                <img src={logo} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
