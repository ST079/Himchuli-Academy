import React, { useState,useEffect} from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Admission.css"; // You'll need to create this CSS file
import { Link } from "react-router-dom";

const Admission = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch(
          "/api/database/faq.php?category=admission"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.error) throw new Error(data.error);
        setFaqs(data);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } 
    };

    fetchFAQs();
  }, []);


  return (
    <div className="faq-container">
      <div className="chat-header">
        <FaQuestionCircle className="chat-icon" />
        <h3>Admission FAQs</h3>
        <div className="chat-bubble">How can we help you today?</div>
      </div>

      <Accordion className="faq-accordion">
        {faqs?.map((item, index) => (
          <Accordion.Item key={index} eventKey={index.toString()} className="faq-card">
            <Accordion.Header className="faq-question">{item.question}</Accordion.Header>
            <Accordion.Body className="faq-answer">{item.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <div className="chat-footer">
        <p>Still have questions?</p>
        <Link to="/contact" className="btn btn-primary">
          Contact Admissions Office
        </Link>
      </div>
    </div>
  );
};

export default Admission;
