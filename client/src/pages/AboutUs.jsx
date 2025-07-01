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
  Button,
  Carousel,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("history");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://himchuliacademy.edu.np/database/about_us.php");
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
        <Spinner animation="border" role="status" variant="primary">
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
    <div className="about-us-page container bg pt-3">
      {/* Hero Section */}
      <section className="about-hero text-center py-5 mb-4">
        <div className="hero-overlay"></div>
        <Container>
          <h1 className="display-4 fw-bold text-white">
            About Himchuli Academy
          </h1>
          <p className="lead text-light">
            Nurturing excellence since {aboutData?.about?.established_year}
          </p>
        </Container>
      </section>

      {/* Mission and Vision */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 mission-card shadow">
                <Card.Body className="text-center p-4">
                  <div className="icon-box mb-3">
                    <i className="fa fa-bullseye text-primary"></i>
                  </div>
                  <Card.Title as="h3" className="fw-bold">
                    Our Mission
                  </Card.Title>
                  <Card.Text className="fs-5">
                    {aboutData?.about?.mission}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 vision-card shadow">
                <Card.Body className="text-center p-4">
                  <div className="icon-box mb-3">
                    <i className="fa fa-eye text-primary"></i>
                  </div>
                  <Card.Title as="h3" className="fw-bold">
                    Our Vision
                  </Card.Title>
                  <Card.Text className="fs-5">
                    {aboutData?.about?.vision}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Leadership Messages */}
      <section className="leadership-messages py-5 bg-light">
        <Container>
          <h2 className="section-title text-center mb-5">
            Messages from Leadership
          </h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="text-center p-4">
                  <div className="leader-image mb-3 mx-auto">
                    <img
                      src={`https://himchuliacademy.edu.np/database/uploads/team/chairperson.jpg`}
                      alt="Chairperson"
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <Card.Title className="fw-bold">
                    Chairperson's Message
                  </Card.Title>
                  <Card.Text className="text-justify">
                    "Our school stands as a symbol of vision, dedication, and
                    relentless pursuit of excellence. From the very beginning,
                    our mission has been to create an environment where young
                    minds can flourish - where education goes beyond books and
                    shapes character, leadership, and humanity. I am deeply
                    thankful to our principal, vice-principal,coordinators,
                    teachers, staff, students and parents for believing in this
                    vision and working together to bring it to life. Let us
                    continue to move forward with the same passion and
                    commitment, making our school not just a center of academic
                    excellence, but a family where every dream finds its wings."
                  </Card.Text>
                  <div className="leader-signature mt-3">
                    <strong>
                      -{" "}
                      {aboutData?.team.find((m) =>
                        m.position.toLowerCase().includes("chairperson")
                      )?.name || "Our Chairperson"}
                    </strong>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="text-center p-4">
                  <div className="leader-image mb-3 mx-auto">
                    <img
                      src={`https://himchuliacademy.edu.np/database/uploads/team/principal.jpg`}
                      alt="Principal"
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <Card.Title className="fw-bold">
                    Principal's Message
                  </Card.Title>
                  <Card.Text className="text-justify">
                    "Dear Students, Teachers, Parents, and Staff, It is with
                    great pride and joy that I address you as the principal of
                    Himchuli Academy. Every day, I am inspired by the dedication
                    of our teachers, the enthusiasm of our students,and the
                    unwavering support of our parents and guardians. Together,
                    we create a nurturing environment where learning thrives,
                    character is built, and dreams take flight. Dear students,
                    you are the heart of this institution."
                  </Card.Text>
                  <div className="leader-signature mt-3">
                    <strong>
                      -{" "}
                      {aboutData?.team.find((m) =>
                        m.position.toLowerCase().includes("principal")
                      )?.name || "Our Principal"}
                    </strong>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="text-center p-4">
                  <div className="leader-image mb-3 mx-auto">
                    <img
                      src={`https://himchuliacademy.edu.np/database/uploads/team/vice_principal.jpg`}
                      alt="Vice Principal"
                      className="img-fluid rounded-circle "
                    />
                  </div>
                  <Card.Title className="fw-bold">
                    Vice Principal's Message
                  </Card.Title>
                  <Card.Text className="text-justify">
                    "It gives me immense pride and joy to welcome you all to our
                    school - a place where dreams take flight, talents are
                    nurtured, and values are built. Here, every child is
                    encouraged to grow academically, emotionally, and socially
                    in a warm, supportive environment. Our dedicated team of
                    teachers and staff work tirelessly to create opportunities
                    for every student to excel and shine. Together, we are not
                    just building a school; we are building a strong,
                    compassionate community. Let us continue to strive for
                    excellence, hand in hand, making our school a beacon of
                    hope, learning, and success."
                  </Card.Text>
                  <div className="leader-signature mt-3">
                    <strong>
                      -{" "}
                      {aboutData?.team.find((m) =>
                        m.position.toLowerCase().includes("vice principal")
                      )?.name || "Our Vice Principal"}
                    </strong>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* School History */}
      <section className="history-section py-5">
        <Container>
          <h2 className="section-title text-center mb-5">Our Story</h2>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="history-image-container">
                <img
                  src={`https://himchuliacademy.edu.np/database/uploads/about/${aboutData?.about?.history_image}`}
                  alt="School History"
                  className="img-fluid rounded shadow"
                />
                <div className="history-badge">
                  Since {aboutData?.about?.established_year}
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <Tabs
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k)}
                id="about-tabs"
                className="mb-3"
              >
                <Tab eventKey="history" title="History">
                  <div className="p-3">
                    <p className="fs-6 text-justify">
                      {aboutData?.about?.history}
                    </p>
                  </div>
                </Tab>
                <Tab eventKey="values" title="Core Values">
                  <ListGroup variant="flush">
                    {aboutData?.about?.core_values &&
                      JSON.parse(aboutData.about.core_values).map(
                        (value, index) => (
                          <ListGroup.Item
                            key={index}
                            className="d-flex align-items-center py-3"
                          >
                            <div className="value-icon me-3">
                              <i className="fa fa-check-circle-fill text-primary"></i>
                            </div>
                            <div>
                              <h5 className="mb-1 fw-bold">{value.title}</h5>
                              <p className="mb-0">{value.description}</p>
                            </div>
                          </ListGroup.Item>
                        )
                      )}
                  </ListGroup>
                </Tab>
                <Tab eventKey="achievements" title="Achievements">
                  <div className="p-3">
                    <p className="fs-6">{aboutData?.about?.achievements}</p>
                    <div className="achievements-grid mt-4">
                      {aboutData?.about?.achievements_list &&
                        JSON.parse(aboutData.about.achievements_list).map(
                          (item, i) => (
                            <div key={i} className="achievement-item">
                              <i className="fa fa-trophy-fill text-warning"></i>
                              <span>{item}</span>
                            </div>
                          )
                        )}
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>

      {/* School Stats */}
      <section className="stats-section py-5 bg-primary text-white">
        <Container>
          <h2 className="section-title text-center mb-5">By The Numbers</h2>
          <Row className="g-4">
            {aboutData?.stats.map((stat, index) => (
              <Col key={index} xs={6} md={3}>
                <div className="stat-card text-center p-3">
                  <div className="stat-value display-4 fw-bold mb-2">
                    {stat.prefix}
                    <span className="counter" data-target={stat.value}>
                      {stat.value}
                    </span>
                    {stat.suffix}
                  </div>
                  <div className="stat-label fs-5">{stat.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Leadership Team */}
      <section className="py-5">
        <Container>
          <h2 className="section-title text-center mb-5">
            Our Leadership Team
          </h2>
          <Row className="g-4">
            {aboutData?.team.map((member) => (
              <Col key={member.id} lg={3} md={6}>
                <Card className="team-card h-100 shadow-sm border-0">
                  <div className="team-image-container">
                    <Card.Img
                      variant="top"
                      src={`https://himchuliacademy.edu.np/database/uploads/team/${member.photo}`}
                      alt={member.name}
                    />
                    <div className="team-social">
                      <p className="mb-1 fw-bold">
                        {member.position}
                      </p>
                    </div>
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title className="fw-bold">{member.name}</Card.Title>
                    <Card.Text>{member.bio.substring(0, 100)}...</Card.Text>
                    {/* <Button
                      variant="outline-primary"
                      size="sm"
                      href={`/about/team/${member.id}`}
                      className="mt-2"
                    >
                      View Profile
                    </Button> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials
      <section className="testimonials-section py-5 bg-light">
        <Container>
          <h2 className="section-title text-center mb-5">
            What People Say About Us
          </h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Carousel indicators={false} interval={5000}>
                {aboutData?.about?.testimonials &&
                  JSON.parse(aboutData.about.testimonials).map(
                    (testimonial, index) => (
                      <Carousel.Item key={index}>
                        <div className="testimonial-item p-4 text-center">
                          <div className="testimonial-content mb-3 fs-4 fst-italic">
                            "{testimonial.quote}"
                          </div>
                          <div className="testimonial-author d-flex align-items-center justify-content-center">
                            <div className="author-image me-3">
                              <img
                                src={`http://yourdomain.com/uploads/testimonials/${testimonial.photo}`}
                                alt={testimonial.name}
                                className="rounded-circle shadow"
                              />
                            </div>
                            <div className="text-start">
                              <div className="author-name fw-bold">
                                {testimonial.name}
                              </div>
                              <div className="author-title text-muted">
                                {testimonial.relation}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                    )
                  )}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section> */}
    </div>
  );
};

export default AboutUs;
