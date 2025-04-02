import React from "react";
import pre from "../../images/why/8.jpg";
import primary from "../../images/why/9.jpg";
import secondary from "../../images/why/10.jpg";
import { motion } from "framer-motion";
import "./Academics.css";

const Academics = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className=" container academics-page bg p-3">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-inner" style={{ height: 400 }}>
          <div className="carousel-item active " style={{ height: 400 }}>
            <img
              src={pre}
              className="d-block academics-img"
              alt="Pre-primary education"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
              }}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Pre-Primary Education</h5>
              <p>
                Pre-primary education is the first step in a child's learning
                journey, where they are introduced to the world of knowledge,
                creativity, and social interaction.
              </p>
            </div>
          </div>
          <div className="carousel-item " style={{ height: 400 }}>
            <img
              src={primary}
              className="d-block academics-img"
              alt="primary education"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="carousel-item " style={{ height: 400 }}>
            <img
              src={secondary}
              className="d-block academics-img"
              alt="Secondary education"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container marketing">
        {/* Pre-Primary Section */}
        <hr className="featurette-divider" />
        <motion.div
          className="row featurette"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="col-md-7" variants={fadeInVariant}>
            <h2 className="featurette-heading fw-normal lh-1">
              The Magic of Pre-Primary Education:
              <span className="text-body-secondary">
                {" "}
                A Foundation for a Bright Future
              </span>
            </h2>
            <p className="lead fs-6">
              Pre-primary education is where a child's journey of learning
              begins, filled with curiosity, creativity, and boundless
              potential...
            </p>
          </motion.div>
          <motion.div className="col-md-5" variants={fadeInVariant}>
            <img
              src={pre}
              alt="Pre-primary education"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </motion.div>
        </motion.div>

        <hr className="featurette-divider" />

        {/* Primary Section */}
        <motion.div
          className="row featurette"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="col-md-7 order-md-2" variants={fadeInVariant}>
            <h2 className="featurette-heading fw-normal lh-1">
              Primary Education:
              <span className="text-body-secondary">
                {" "}
                Building the Bridge to a Brighter Future.
              </span>
            </h2>
            <p className="lead fs-6">
              Primary education is a crucial stepping stone in a child's
              academic and personal growth...
            </p>
          </motion.div>
          <motion.div className="col-md-5 order-md-1" variants={fadeInVariant}>
            <img
              src={primary}
              alt="Primary education"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </motion.div>
        </motion.div>

        <hr className="featurette-divider" />

        {/* Secondary Section */}
        <motion.div
          className="row featurette"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="col-md-7" variants={fadeInVariant}>
            <h2 className="featurette-heading fw-normal lh-1">
              Secondary Education:
              <span className="text-body-secondary">
                {" "}
                Shaping Future Leaders and Innovators.
              </span>
            </h2>
            <p className="lead fs-6">
              Secondary education is a transformative phase where students
              evolve from learners to critical thinkers...
            </p>
          </motion.div>
          <motion.div className="col-md-5" variants={fadeInVariant}>
            <img
              src={secondary}
              alt="Secondary education"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </motion.div>
        </motion.div>

        <hr className="featurette-divider" />
      </div>
    </div>
  );
};

export default Academics;
