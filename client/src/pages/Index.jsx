import React from "react";
import "./Index.css";
import YouTubeEmbed from "../components/YoutubeEmbed";
import { Link } from "react-router-dom";
import Img from "../../images/why/why.png";
import Events from "../components/Events";
import Quotes from "../components/Quotes";

const Index = () => {
  return (
    <div>
      <div className="landing-page-img"></div>
      <div className="landing-content">
        <h2>Center of Excellence since 2059 BS</h2>
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
                <p className="card-text fs-6">
                  Classes are Closed For Now <br />
                  Result is On 30th Chaitra ( 7:30 to 9:30 AM ) <br />
                  New Session Starts on 7st Baisakh <br />
                </p>
              </div>
              <div className="admission box line">
                <div className="card-body">
                  <h3 className="fs-6 fw-bold">Admission Process</h3>
                  <p className="card-text fs-6">
                    Welcome to the Himchuli Academy Admissions. We request you
                    to fill out the application forms online. Currently, we are
                    accepting applications upto IX . Click the
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
              <div className="container-fluid py-5 ">
                <h1 className="display-5 fw-bold"> 📚 Blogs & News</h1>
                <p className="col-md-8 fs-6">
                  Welcome to our Blog and News section—your go-to source for the
                  latest updates, stories, and insights from our school
                  community. From academic achievements and student spotlights
                  to event recaps and important announcements, stay connected
                  with everything happening on campus. Whether you're a student,
                  parent, teacher, or alumni, there's always something inspiring
                  to read and share.
                </p>
                <Link to={"/blogs-news"}>
                  <button className="btn nav-btn btn-lg" type="button">
                    Explore !!!
                  </button>
                </Link>
              </div>
            </div>

            <div className="row g-4">
              <Events
                img="../../images/blogs-news/1.jpg"
                title="A Refreshing Escape to Fulchowki 🌿"
                description="Escape the city buzz and unwind in the serene hills of Fulchowki. Surrounded by lush forests, cool breezes, and peaceful trails, it's the perfect spot to relax, reconnect with nature, and recharge your mind."
              ></Events>

              <Events
                img="../../images/blogs-news/2.jpg"
                title="🎓 Graduation Ceremony – Pre-Primary Completion 2081"
                description="A joyful celebration marking the first big milestone in our
                    little learners’ journey! With smiles, songs, and proud
                    moments, our pre-primary graduates took their first step
                    toward a bright future. Congratulations, Class of 2081!"
              ></Events>
            </div>
          </div>


          {/* Quotes */}
          <div className="quotes">
            <Quotes/>
          </div>

        
          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default Index;
