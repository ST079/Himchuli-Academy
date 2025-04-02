import React from 'react'
import "./Contact.css"
import Email from '../components/Email';

const Contact = () => {
  return (
    <div className="contact container bg">
      <div className="row justify-content-md-center p-5">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 className="mb-4 display-5 text-center fw-bold">Need Help ?</h2>
          <p className="text-secondary text-center lead fs-5">
            Our team is available to provide prompt and helpful responses to all
            inquiries. You can reach us via phone, email, or by filling out the
            contact form below.
          </p>
          <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark" />
        </div>
      </div>
      {/* items */}
      <div className="contact-items d-flex flex-column flex-md-row justify-content-evenly align-items-center gap-5">
        <div className="location shadow">
          <div className="contact-icon text-center">
            <i className="fa-solid fa-location-dot fs-1"></i>
          </div>
          <p className="text-center">Madhyapur Thimi 07, Bhaktapur</p>
        </div>

        <div className="phone shadow">
          <div className="contact-icon text-center">
            <i className="fa-solid fa-phone fs-1"></i>
          </div>
          <p className="text-center">01 6638441</p>
        </div>

        <div className="email shadow">
          <div className="contact-icon text-center">
            <i className="fa-solid fa-envelope fs-1"></i>
          </div>
          <Email />
        </div>
      </div>

      {/* form and map */}

      <div className="form mt-4">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9649737284585!2d85.3797521743396!3d27.687477426369647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a43b7ec4b9f%3A0x52b79cae224b9b05!2sHimchuli%20Academy!5e0!3m2!1sen!2snp!4v1744519011326!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{border:0}}
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="form-group text-light">
            <h2>Get In Touch With Us !</h2>
            <hr />
            <div className="form-elements">
              
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact