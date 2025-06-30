import React, { useState,useEffect } from "react";
import "./Index.css";
import YouTubeEmbed from "../components/YoutubeEmbed";
import { Link } from "react-router-dom";
import Img from "../../images/why/why.png";
import Events from "../components/Events";
import TypewriterEffect from "../components/TypewriterEffect";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Carousel } from "react-bootstrap";


const Index = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [announcements, setAnnouncements] = useState([]);
  const [beyondAcademics, setBeyondAcademics] = useState([]);
  const [loading, setLoading] = useState({
    announcements: true,
    beyondAcademics: true,
  });
  const [error, setError] = useState({
    announcements: null,
    beyondAcademics: null,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch(
          "http://localhost/database/get_announcements.php"
        );
        if (!response.ok) throw new Error("Failed to fetch announcements");

        const data = await response.json();
        if (!data.success) throw new Error(data.error || "Invalid data");

        setAnnouncements(data.announcements);
      } catch (err) {
        setError((prev) => ({ ...prev, announcements: err.message }));
      } finally {
        setLoading((prev) => ({ ...prev, announcements: false }));
      }
    };

    const fetchBeyondAcademics = async () => {
      try {
        const response = await fetch(
          "http://localhost/database/get_beyond_academics.php"
        );
        if (!response.ok) throw new Error("Failed to fetch beyond academics");

        const data = await response.json();
        if (!data.success) throw new Error(data.error || "Invalid data");
        setBeyondAcademics(data.activities);
      } catch (err) {
        setError((prev) => ({ ...prev, beyondAcademics: err.message }));
      } finally {
        setLoading((prev) => ({ ...prev, beyondAcademics: false }));
      }
    };

    fetchAnnouncements();
    fetchBeyondAcademics();
  }, []);

  console.log("Beyond Academics Data:", beyondAcademics);
  

  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    if (beyondAcademics.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % beyondAcademics.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [beyondAcademics]);

  // Loading state component
  const LoadingPlaceholder = () => (
    <div className="placeholder-glow">
      <p className="placeholder col-12"></p>
      <p className="placeholder col-12"></p>
      <p className="placeholder col-12"></p>
    </div>
  );

  // Error state component
  const ErrorMessage = ({ message }) => (
    <div className="alert alert-danger">
      <small>{message}</small>
    </div>
  );

  return (
    <div>
      <div className="landing-page-img"></div>
      <div className="landing-content">
        <h2>
          <TypewriterEffect />
        </h2>
        <h1>Quality Life through Quality Education</h1>
        <p>
          At Himchuli Academy, we nurture curiosity, foster creativity, and
          empower students to reach their full potential in a supportive and
          innovative learning environment.
        </p>

        <div className="landing-btns">
          <Link to={"contact"}>
            <button className="btn1">Schedule a Visit</button>
          </Link>
          <Link to={"/about"}>
            <button className="btn2">Learn More</button>
          </Link>
        </div>
      </div>

      {/* <!-- Second page --> */}
      <div className="body-contents container pb-5">
        <div className="bg pb-5">
          {/* tour */}
          <div className="second-page p-5 ">
            <div className="socials d-flex flex-column gap-3 fs-4 align-items-center justify-content-center">
              <Link to="https://www.facebook.com/himchuliacademy" target="_">
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link
                to="https://www.instagram.com/himchuliacademy/?hl=en"
                target="_"
              >
                <i
                  className="fa-brands fa-instagram"
                  style={{ color: "red" }}
                ></i>
              </Link>

              <Link
                to="https://www.instagram.com/himchuliacademy/?hl=en"
                target="_"
              >
                <i
                  className="fa-brands fa-tiktok"
                  style={{ color: "black" }}
                ></i>
              </Link>
              <Link
                to="https://www.instagram.com/himchuliacademy/?hl=en"
                target="_"
              >
                <i
                  className="fa-brands fa-youtube"
                  style={{ color: "red" }}
                ></i>
              </Link>
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
              <Link to={"/about"}>
                <button className="btn nav-btn btn-sm" type="button">
                  Learn More
                </button>
              </Link>
            </div>

            <div className="boards d-flex flex-column fs-4 justify-content-center align-items-center">
              <div className="announcements box line">
                <h3 className="fs-6 fw-bold">Announcements</h3>
                {loading.announcements ? (
                  <LoadingPlaceholder />
                ) : error.announcements ? (
                  <ErrorMessage message={error.announcements} />
                ) : (
                  announcements.map((item, index) => (
                    <p key={index} className="card-text fs-6">
                      {item}
                    </p>
                  ))
                )}
              </div>
              <div className="admission box line">
                <div className="card-body">
                  <h3 className="fs-6 fw-bold">Admission Process</h3>
                  <p className="card-text fs-6">
                    Welcome to the Himchuli Academy Admissions. We request you
                    to fill out the application forms online. <br /> Click the
                    button below to apply now.
                  </p>
                  <Link to="/apply-now" className="btn nav-btn">
                    Get Forms
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Why Himchuli Page */}
          <div className="why px-5 ">
            <h2 className="fw-bolder fs-3 head-line d-flex gap-3">
              Why Choose Himchuli Academy?
              <i className="fa-solid fa-graduation-cap"></i>
            </h2>
            <div className="container col-xxl-8">
              <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                  <img
                    src={Img}
                    className="d-block mx-lg-auto img-fluid why-img"
                    alt="Himchuli Academy"
                    width="700"
                    height="500"
                    loading="lazy"
                  />
                </div>
                <div className="col-lg-6 why-des">
                  <h1 className="display-5 fw-bold lh-1 mb-3">
                    Shape The Future Of Education with Himchuli Academy
                  </h1>
                  <p className="fs-6">
                    Himchuli Academy is a top-ranked BLE school in Madhyapur
                    thimi scoring top results every year in Examinations. It
                    successfully blends tradition with a forward-thinking,
                    international education philosophy that truly meets the
                    needs of young children venturing into adulthood in an
                    increasingly complex world.
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <Link to={"/about"}>
                      <button
                        type="button"
                        className="btn nav-btn btn-lg px-4 me-md-2"
                      >
                        Learn More!
                      </button>
                    </Link>
                    <Link to="/contact">
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-lg px-4"
                      >
                        Contact Us
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="container px-4 " id="icon-grid">
              <h2 className="pb-2 border-bottom">Key Offerings</h2>

              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                <div className="col">
                  <div className="">
                    <i className="fa-solid fa-child-reaching fs-3 "></i>
                    <h3 className="fw-bold mb-0 fs-5 text-body-emphasis">
                      Montessori-Based Learning
                    </h3>
                  </div>
                  <p className="fs-6">
                    Early education follows an internationally recognized
                    approach for holistic development.
                  </p>
                </div>

                <div className="col ">
                  <div className="">
                    <i className="fa-solid fa-laptop fs-3 "></i>
                    <h3 className="fw-bold mb-0 fs-5 text-body-emphasis">
                      Technology-Integrated Teaching
                    </h3>
                  </div>
                  <p className="fs-6">
                    Grade II and above receive computer education, with smart
                    classrooms and ICT-based learning.
                  </p>
                </div>

                <div className="col">
                  <div>
                    <i className="fa-regular fa-comments fs-3"></i>
                    <h3 className="fw-bold mb-0 fs-5 text-body-emphasis">
                      Counseling & Guidance
                    </h3>
                  </div>
                  <p className="fs-6">
                    Personalized academic support and project-based learning.
                  </p>
                </div>

                <div className="col">
                  <div>
                    <i className="fa-solid fa-utensils fs-3"></i>
                    <h3 className="fw-bold mb-0 fs-5 text-body-emphasis">
                      Healthy & Hygienic Meals
                    </h3>
                  </div>
                  <p className="fs-6">
                    Academy canteen offers nutritious food at subsidized rates.
                  </p>
                </div>

                <div className="col">
                  <div>
                    <i className="fa-solid fa-medal fs-3"></i>
                    <h3 className="fw-bold mb-0 fs-5 text-body-emphasis">
                      Comprehensive Sports & Arts Programs
                    </h3>
                  </div>
                  <p className="fs-6">
                    Football, Volleyball, Taekwondo, Cricket, Drawing, Painting,
                    Singing, Dancing, and Music.
                  </p>
                </div>

                <div className="col">
                  <div>
                    <i className="fa-solid fa-flask-vial fs-3"></i>
                    <h3 className="fw-bold mb-0 fs-5 text-body-emphasis">
                      Interactive Learning
                    </h3>
                  </div>
                  <p className="fs-6">
                    Math lab, language classes, and ICT-based classrooms
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Blogs & News */}
          <div className="container">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
              <div className="container-fluid py-5 blogs-news">
                <h1 className="display-5 fw-bold"> 📚 News & Events</h1>
                <p className="col-md-8 fs-6">
                  Welcome to our News and Events section—your go-to source for
                  the latest updates, stories, and insights from our school
                  community. From academic achievements and student spotlights
                  to event recaps and important announcements, stay connected
                  with everything happening on campus. Whether you're a student,
                  parent, teacher, or alumni, there's always something inspiring
                  to read and share.
                </p>
                <Link to={"/news-events"}>
                  <button className="btn nav-btn btn-lg blog-btn" type="button">
                    Explore !!!
                  </button>
                </Link>
              </div>
            </div>

            <div className="row container">
              <div className="latest-updates text-dark mb-4 d-flex justify-content-between align-items-center">
                <h2 className="display-5 fw-bold">Latest Updates</h2>
                <Link to={"news-events"}>
                  <p className="fs-6">View All</p>
                </Link>
              </div>

              {loading.beyondAcademics ? (
                <LoadingPlaceholder />
              ) : error.beyondAcademics ? (
                <ErrorMessage message={error.beyondAcademics} />
              ) : (
                <div className="row">
                  {beyondAcademics.slice(0, 2).map((event, index) => (
                    <div className="col-md-6 mb-4" key={index}>
                      <div
                        className="event-card"
                        style={{
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(http://localhost/database/uploads/beyond_academics/${event.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          height: "300px",
                          borderRadius: "10px",
                          padding: "20px",
                          color: "white",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                        }}
                      >
                        <h3 className="fw-bold">{event.title}</h3>
                        <p>{event.short_description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Banner */}
          <div className="last">
            <div className="container">
              <div className="row justify-content-md-center p-5">
                <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                  <h2 className="mb-4 display-5 text-center fw-bold">
                    Join the Himchuli Academy Family Today!
                  </h2>
                  <p className="text-secondary text-center lead fs-5">
                    Enroll now and embark on a journey of discovery, growth, and
                    success. Together, let's shape a brighter future for your
                    child.
                  </p>
                  <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark" />
                </div>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  Book Your Seat Now!!
                </Button>

                <ApplyModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </div>
  );
};

const ApplyModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Apply Now</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Himchuli Academy</h4>
        <p>
          Click on the link below to apply for admission at Himchuli Academy.
          <br />
          <Link
            to={
              "https://ingrails.com/school/admission/form/himchuli-academy?fbclid=IwY2xjawJwEa5leHRuA2FlbQIxMAABHiz0aJHg1MfzmjyUvOHwh3tHMui5P1nNqiFB3bMPEvecf0EUFzWqBMrhACLK_aem_YKxBYbckSYBhuODSyprtHw"
            }
            target="_blank"
          >
            Apply Here
          </Link>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Index;
