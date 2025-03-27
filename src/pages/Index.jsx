import React from "react";
import logo from "../assets/logo.png";
import bg from "../assets/building.jpg";
import "../styles/Index.css";
import Navbar from "../layouts/Navbar";
const Index = () => {
  return (
    <div>
      <header>
        {/* <!-- header section --> */}
        <div className="head-info">
          <ul className="head-items ">
            <li className="head-item">
              <i className="fa-solid fa-location-dot"></i>Myadhyapur Thimi - 07
            </li>
            <li className="head-item">
              <i className="fa-solid fa-phone-volume"></i>01-6638441
            </li>
            <li className="head-item">
              <i className="fa-solid fa-envelope"></i>himchuli.academy@gmail.com
            </li>
          </ul>
        </div>
        <div className="nav collapse navbar-collapse">
          <ul className="nav-items">
            <li className="nav-item">
              <a href="">Home</a>
            </li>
            <li className="nav-item">
              <a href="">About</a>
            </li>
            <li className="nav-item">
              <a href="">Academics</a>
            </li>
            <li className="nav-item">
              <a href="">Admissions</a>
            </li>
            <li className="nav-item">
              <a href="">Services</a>
            </li>
            <li className="nav-item">
              <a href="">Contact</a>
            </li>
            <li className="nav-item">
              <a href="">Beyound Academics</a>
            </li>
            <li className="nav-item">
              <a href="">Memories</a>
            </li>
            <li className="nav-item">
              <button className="nav-btn">Apply Now</button>
            </li>
          </ul>
          <div className="banner">
            <i className="fa-solid fa-bookmark"></i>
            <img src={logo} alt="" />
          </div>
        </div>
      </header>
      {/* <!-- header section ends here --> */}

      <Navbar />

      <div className="landing-page-img"></div>
      <div className="landing-content">
        <h2>Center of Excellence since 2004</h2>
        <h1>
          Quality Life , <br /> <span className="sm">Through</span> Quality
          Education
        </h1>
        <p>
          At Himchuli Academy, we nurture curiosity, foster creativity, and
          empower students to reach their full potential in a supportive and
          innovative learning environment.
        </p>

        <div className="landing-btns">
          <button className="btn1">Schedule a Visit</button>
          <button className="btn2">Learn More</button>
        </div>
      </div>

      {/* <!-- Second page --> */}
      <div className="body-contents container pb-5">
        <div className="bg pb-5">
          <div className="second-page p-5 ">
            <div className="socials d-flex flex-column gap-3 fs-4 align-items-center justify-content-center">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-tiktok"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>

            <div className="school-tour">
              <h6 className="text-primary fw-bold mb-4 fs-6">
                A SHORT VIDEO TOUR _
              </h6>
              <h2 className="fw-bolder fs-3 head-line">
                Welcome to <br /> Himchuli Academy
              </h2>
              <div className="video-box box mt-4">
                <iframe
                  src="https://www.youtube.com/embed/6NAu6hFtOc0?autoplay=1&loop=1&mute=1&playlist=6NAu6hFtOc0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="boards d-flex flex-column fs-4 justify-content-center align-items-center">
              <div className="announcements box line">
                <h3 className="fs-6">Announcements</h3>
              </div>
              <div className="admission box line">
                <h3 className="fs-6">Admission Process</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
