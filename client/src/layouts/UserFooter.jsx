import React from "react";
import { Link } from "react-router-dom";

const UserFooter = () => {
  return (
    <div className="mt-5">
      {/* Footer */}
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1c2331" }}
      >
        {/* Section: Social media */}
        <section
          className="d-flex justify-content-between p-4"
          style={{ backgroundColor: "#6351ce" }}
        >
          {/* Left */}
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>

          {/* Right */}
          <div>
            <Link
              to="https://www.facebook.com/himchuliacademy"
              className="text-white me-4"
              target="_"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              to="https://www.instagram.com/himchuliacademy/?hl=en"
              className="text-white me-4"
              target="_"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="#" className="text-white me-4">
              <i className="fab fa-youtube"></i>
            </Link>
            <Link to="#" className="text-white me-4">
              <i className="fab fa-tiktok"></i>
            </Link>
          </div>
        </section>

        {/* Section: Links */}
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              {/* Company */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Himchuli Acadmey</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>Quality Life, Through Quality Education</p>
              </div>

              {/* Why */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Why Us?</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <Link to="#!" className="text-white text-decoration-none">
                    Words From Our Chairperson
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-white text-decoration-none">
                    Words Form Our Principal
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-white text-decoration-none">
                    Words From Our Vice-Principal
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-white text-decoration-none">
                    Words From Our School Captain
                  </Link>
                </p>
              </div>

              {/* Useful links */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful Links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <Link to="/about" className="text-white text-decoration-none">
                    About
                  </Link>
                </p>
                <p>
                  <Link
                    to="/academics"
                    className="text-white text-decoration-none"
                  >
                    Academics
                  </Link>
                </p>
                <p>
                  <Link
                    to="/beyond-academics"
                    className="text-white text-decoration-none"
                  >
                    Beyond Academics
                  </Link>
                </p>
                <p>
                  <Link to="/blogs" className="text-white text-decoration-none">
                    Blogs
                  </Link>
                </p>
                <p>
                  <Link
                    to="/contact"
                    className="text-white text-decoration-none"
                  >
                    Contact
                  </Link>
                </p>
              </div>

              {/* Contact */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <i className="fas fa-home mr-3"></i>{" "}
                  <span style={{ fontSize: "15px" }}>
                    MyadhyapurThimi -07, Bhaktapur
                  </span>
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i>{" "}
                  <span style={{ fontSize: "15px" }}>
                    himchuli.academy@gmail.com
                  </span>
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i>{" "}
                  <span style={{ fontSize: "15px" }}>01 6638441</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2025 Copyright :
          <Link className="text-white text-decoration-none fs-6" to="/">
            Himchuli Academy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default UserFooter;
