import React from "react";
import CommingSoon from "../components/CommingSoon";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container contact ">
      <div className="title d-flex ">
        <h1>Get In Touch With Us</h1>
        <i className="fa fa-phone fs-1"></i>
      </div>
      <div
        className="aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row gy-2">
          <div className="col-lg-6">
            <div
              className="info-item d-flex flex-column justify-content-center align-items-center aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bi bi-geo-alt"></i>
              <h3>Address</h3>
              <p>Madhyapur Thimi-07, Dhunchopakha, Bhaktapur</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              className="info-item d-flex flex-column justify-content-center align-items-center aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-telephone"></i>
              <h3>Call Us</h3>
              <p>01-6638441</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              className="info-item d-flex flex-column justify-content-center align-items-center aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-envelope"></i>
              <h3>Email Us</h3>
              <p>himchuli.academy.com</p>
            </div>
          </div>
        </div>

        <div className="row gy-4 mt-1 ">
          <div
            className="col-lg-6 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9649737284585!2d85.3797521743396!3d27.687477426369647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a43b7ec4b9f%3A0x52b79cae224b9b05!2sHimchuli%20Academy!5e0!3m2!1sen!2snp!4v1744419716809!5m2!1sen!2snp"
              width="600"
              height="450"
              style={{border:0, width: "100%", height: "400px"}}
              allowFullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="col-lg-6">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required=""
                  />
                </div>

                <div className="col-md-6 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required=""
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required=""
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>

                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
