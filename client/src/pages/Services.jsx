import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaGraduationCap,
  FaFutbol,
  FaBus,
  FaUtensils,
  FaComments,
  FaChild,
  FaFlask,
  FaMusic,
} from "react-icons/fa";
import "./Services.css";

const Services = () => {
  // Static services data
  const [services] = useState([
    {
      id: 1,
      title: "Academic Programs",
      description:
        "Comprehensive curriculum from pre-school to high school with modern teaching methodologies.",
      icon: "fa-graduation-cap",
      imageUrl: "/images/services/academic.jpg",
    },
    {
      id: 2,
      title: "Extracurricular Activities",
      description:
        "Sports, arts, music, and clubs to foster holistic development.",
      icon: "fa-futbol",
      imageUrl: "/images/services/extracurricular.jpg",
    },
    {
      id: 3,
      title: "Transportation Service",
      description: "Safe and reliable school transportation with GPS tracking.",
      icon: "fa-bus",
      imageUrl: "/images/services/transport.jpg",
    },
    {
      id: 4,
      title: "Cafeteria Services",
      description:
        "Healthy and hygienic meals prepared by certified nutritionists.",
      icon: "fa-utensils",
      imageUrl: "/images/services/cafeteria.jpg",
    },
    {
      id: 5,
      title: "Counseling Services",
      description:
        "Professional guidance for academic and personal development.",
      icon: "fa-comments",
      imageUrl: "/images/services/counseling.jpg",
    },
    {
      id: 6,
      title: "Early Childhood Education",
      description:
        "Specialized programs for our youngest learners to develop foundational skills.",
      icon: "fa-child",
      imageUrl: "/images/services/early-childhood.jpg",
    },
  ]);

  // Icon mapping
  const iconComponents = {
    "fa-graduation-cap": FaGraduationCap,
    "fa-futbol": FaFutbol,
    "fa-bus": FaBus,
    "fa-utensils": FaUtensils,
    "fa-comments": FaComments,
    "fa-child": FaChild,
    "fa-flask": FaFlask,
    "fa-music": FaMusic,
  };

  const renderIcon = (iconName) => {
    const IconComponent = iconComponents[iconName] || FaChild;
    return <IconComponent className="service-icon" />;
  };

  return (
    <Container className="services-page py-5 container bg">
      <div className="text-center mb-5">
        <h1 className="display-4">Our Services</h1>
        <p className="lead">
          Quality education and comprehensive support for holistic development
        </p>
      </div>

      <Row>
        {services.map((service) => (
          <Col key={service.id} md={6} lg={4} className="mb-4">
            <Card className="h-100 service-card">
              <div className="service-icon-container">
                {renderIcon(service.icon)}
              </div>
              <Card.Body className="text-center">
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
              {/* {service.imageUrl && (
                <Card.Img
                  variant="bottom"
                  src={service.imageUrl}
                  alt={service.title}
                  className="service-image"
                />
              )} */}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
