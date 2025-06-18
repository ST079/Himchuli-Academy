import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Alert,
  Tab,
  Tabs,
  ListGroup,
  Badge,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://yourdomain.com/api/about_us.php");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAboutData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center my-5">
        Error loading about us information: {error}
      </div>
    );
  }

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <div className="about-hero text-center py-5 mb-4">
        <Container>
          <h1 className="display-4">About Himchuli Academy</h1>
          <p className="lead">
            Nurturing excellence since {aboutData?.about?.established_year}
          </p>
        </Container>
      </div>

      {/* Mission and Vision */}
      <Container className="my-5">
        <Row className="g-4">
          <Col md={6}>
            <Card className="h-100 mission-card">
              <Card.Body className="text-center p-4">
                <div className="icon-box mb-3">
                  <i className="bi bi-bullseye"></i>
                </div>
                <Card.Title as="h3">Our Mission</Card.Title>
                <Card.Text>{aboutData?.about?.mission}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100 vision-card">
              <Card.Body className="text-center p-4">
                <div className="icon-box mb-3">
                  <i className="bi bi-eye"></i>
                </div>
                <Card.Title as="h3">Our Vision</Card.Title>
                <Card.Text>{aboutData?.about?.vision}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* School History */}
      <div className="history-section py-5">
        <Container>
          <h2 className="section-title text-center mb-5">Our Story</h2>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img
                src={`http://yourdomain.com/uploads/about/${aboutData?.about?.history_image}`}
                alt="School History"
                className="img-fluid rounded"
              />
            </Col>
            <Col lg={6}>
              <Tabs defaultActiveKey="history" id="about-tabs" className="mb-3">
                <Tab eventKey="history" title="History">
                  <div className="p-3">
                    <p>{aboutData?.about?.history}</p>
                  </div>
                </Tab>
                <Tab eventKey="values" title="Core Values">
                  <ListGroup variant="flush">
                    {aboutData?.about?.core_values &&
                      JSON.parse(aboutData.about.core_values).map(
                        (value, index) => (
                          <ListGroup.Item
                            key={index}
                            className="d-flex align-items-center"
                          >
                            <div className="value-icon me-3">
                              <i className="bi bi-check-circle-fill"></i>
                            </div>
                            <div>
                              <h5 className="mb-1">{value.title}</h5>
                              <p className="mb-0">{value.description}</p>
                            </div>
                          </ListGroup.Item>
                        )
                      )}
                  </ListGroup>
                </Tab>
                <Tab eventKey="achievements" title="Achievements">
                  <div className="p-3">
                    <p>{aboutData?.about?.achievements}</p>
                  </div>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>

      {/* School Stats */}
      <div className="stats-section py-5">
        <Container>
          <h2 className="section-title text-center mb-5">By The Numbers</h2>
          <Row className="g-4">
            {aboutData?.stats.map((stat, index) => (
              <Col key={index} xs={6} md={3}>
                <div className="stat-card text-center p-3">
                  <div className="stat-value">
                    {stat.prefix}
                    <span className="counter" data-target={stat.value}>
                      {stat.value}
                    </span>
                    {stat.suffix}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Leadership Team */}
      <Container className="my-5">
        <h2 className="section-title text-center mb-5">Our Leadership Team</h2>
        <Row className="g-4">
          {aboutData?.team.map((member) => (
            <Col key={member.id} lg={3} md={6}>
              <Card className="team-card h-100">
                <Card.Img
                  variant="top"
                  src={`http://yourdomain.com/uploads/team/${member.photo}`}
                  alt={member.name}
                />
                <Card.Body className="text-center">
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {member.position}
                  </Card.Subtitle>
                  <Card.Text className="text-truncate">
                    {member.bio.substring(0, 100)}...
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    href={`/about/team/${member.id}`}
                  >
                    View Profile
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Testimonials */}
      <div className="testimonials-section py-5">
        <Container>
          <h2 className="section-title text-center mb-5">
            What People Say About Us
          </h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="testimonial-carousel">
                {aboutData?.about?.testimonials &&
                  JSON.parse(aboutData.about.testimonials).map(
                    (testimonial, index) => (
                      <div key={index} className="testimonial-item p-4">
                        <div className="testimonial-content mb-3">
                          "{testimonial.quote}"
                        </div>
                        <div className="testimonial-author d-flex align-items-center">
                          <div className="author-image me-3">
                            <img
                              src={`http://yourdomain.com/uploads/testimonials/${testimonial.photo}`}
                              alt={testimonial.name}
                              className="rounded-circle"
                            />
                          </div>
                          <div>
                            <div className="author-name">
                              {testimonial.name}
                            </div>
                            <div className="author-title text-muted">
                              {testimonial.relation}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;
