import React from "react";
import "./Index.css";
import YouTubeEmbed from "../components/YoutubeEmbed";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <div>
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
                <YouTubeEmbed videoId="6NAu6hFtOc0" />
              </div>
              <p className="fs-6 mt-4 school-description">
                Himchuli Academy is a progressive educational institution
                dedicated to fostering a supportive and dynamic learning
                environment for students. Himchuli Academy strives to inspire
                creativity, critical thinking, and a lifelong love for learning
                in its students, while actively engaging with the community to
                promote meaningful education in Nepal.
              </p>
            </div>

            <div className="boards d-flex flex-column fs-4 justify-content-center align-items-center">
              <div className="announcements box line">
                <h3 className="fs-6 fw-bold">Announcements</h3>
              </div>
              <div className="admission box line">
                <div class="card-body">
                  <h3 className="fs-6 fw-bold">Admission Process</h3>
                  <p class="card-text fs-6">
                    Welcome to the Himchuli Academy Admissions. We request you
                    to fill out the application forms online. Currently, we are
                    accepting applications for Grades III, IV, V, VI . Click the
                    button below to apply now.
                  </p>
                  <Link to="/apply-now" class="btn nav-btn">
                    Apply Forms
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Why Himchuli Page */}
          <div className="why px-5">
            <h2 className="fw-bolder fs-3 head-line">
              Why Choose Himchuli Academy?
            </h2>
          </div>

          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default Index;
