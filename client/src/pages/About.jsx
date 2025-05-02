import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import building from "../assets/building.jpg";
import vision from "../../images/about/vision.png";
import { Link } from "react-router-dom";
import principal from "../../images/about/principal.jpg";
import chairperson from "../../images/about/chairperson.jpg";
import vicePrincipal from "../../images/about/vice.jpg";

const About = () => {
  return (
    <div className=" container about-us-page bg p-3">
      {/* <a href="#objectives">link</a> */}
      {/* Header Banner */}
      <div className="bg-primary text-white py-5 mb-5">
        <Container>
          <h1 className="display-4 fw-bold">About Himchuli Academy</h1>
          <p className="lead">Quality Life Through Quality Education</p>
        </Container>
      </div>

      {/* Introduction Section */}
      <Container className="mb-5">
        <Row className="align-items-center">
          <Col lg={6}>
            <h2 className="border-bottom pb-3 mb-4">Our Introduction</h2>
            <p className="lead">
              Welcome to Himchuli Academy School, where excellence meets
              opportunity.
            </p>
            <p>
              Established in 2059 BS, Himchuli Academy has been a beacon of
              quality education in our community. Named after the majestic
              Himchuli peak, our institution stands tall in its commitment to
              providing holistic education that empowers students to reach their
              highest potential.
            </p>
            <p>
              At Himchuli Academy, we believe that education goes beyond
              textbooks. Our approach comfanes academic rigor with character
              development, creating well-rounded individuals prepared to face
              the challenges of tomorrow's world.
            </p>
          </Col>
          <Col lg={6}>
            <img
              src={building}
              alt="Himchuli Academy"
              className="img-fluid rounded shadow-lg"
            />
          </Col>
        </Row>
      </Container>

      {/* Objectives Section */}
      <div className="bg-light py-5 mb-5" id="objectives">
        <Container>
          <h2 className="text-center mb-5">Our Objectives</h2>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div
                    className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-book fs-4"></i>
                  </div>
                  <Card.Title>Academic Excellence</Card.Title>
                  <Card.Text>
                    To provide high-quality education that encourages critical
                    thinking and intellectual growth.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div
                    className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-person fs-4"></i>
                  </div>
                  <Card.Title>Character Building</Card.Title>
                  <Card.Text>
                    To nurture ethical values, integrity, and social
                    responsifality in our students.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div
                    className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-globe fs-4"></i>
                  </div>
                  <Card.Title>Global Perspective</Card.Title>
                  <Card.Text>
                    To prepare students to thrive in an interconnected global
                    community with cultural awareness.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div
                    className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-lightbulb fs-4"></i>
                  </div>
                  <Card.Title>Innovation</Card.Title>
                  <Card.Text>
                    To foster creativity and innovative thinking through modern
                    teaching methodologies.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Vision Section */}
      <Container className="mb-5">
        <Row className="align-items-center">
          <Col lg={6} className="order-lg-2">
            <h2 className="border-bottom pb-3 mb-4">Our Vision</h2>
            <p className="lead">
              Empowering students to become leaders of tomorrow.
            </p>
            <p>
              Himchuli Academy envisions creating a learning environment where
              students discover their unique potential and develop the skills,
              knowledge, and values necessary to contribute meaningfully to
              society.
            </p>
            <p>
              We aspire to be recognized as a center of educational excellence
              that:
            </p>
            <ul>
              <li>Inspires a lifelong love for learning</li>
              <li>Embraces diversity and promotes inclusivity</li>
              <li>Balances tradition with innovation</li>
              <li>
                Prepares students for the challenges of a rapidly changing world
              </li>
              <li>
                Contributes to community development and national progress
              </li>
            </ul>
          </Col>
          <Col lg={6} className="order-lg-1">
            <img
              src={vision}
              alt="Students in a modern classroom"
              className="img-fluid rounded shadow-lg"
            />
          </Col>
        </Row>
      </Container>

      {/* Words from Key Figures */}
      <div className="bg-primary text-white py-5 mb-5">
        <Container>
          <h2 className="text-center mb-5">Words from Our Leaders</h2>
          <Carousel indicators={false} className="testimonial-carousel ">
            <Carousel.Item>
              <Row className="justify-content-center">
                <Col md={8} lg={6} className="text-center">
                  <img
                    src={chairperson}
                    alt="Principal"
                    className="rounded-circle mb-3"
                    width="150"
                    height="150"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                  <h4>Mr. Ishwar Thapa Magar</h4>
                  <p className="text-white-50 mb-4">Chairperson</p>
                  <blockquote className="blockquote">
                    <p>
                      It is with great pride and heartfelt gratitude that I
                      address you today as a chairperson of Himchuli Academy.
                      Our school stands as a symbol of vision, dedication, and
                      relentless pursuit of excellence. From the very beginning,
                      our mission has been to create an environment where young
                      minds can flourish - where education goes beyond books and
                      shapes character, leadership, and humanity. I am deeply
                      thankful to our principal, vice-principal, coordinators,
                      teachers, staff, students and parents for believing in
                      this vision and working together to bring it to life. Let
                      us continue to move forward with the same passion and
                      commitment, making our school not just a center of
                      academic excellence, but a family where every dream finds
                      its wings.
                    </p>
                    <button className="btn nav-btn">Learn More !</button>
                  </blockquote>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-center">
                <Col md={8} lg={6} className="text-center">
                  <img
                    src={principal}
                    alt="Principal: Ganesh Ram Kalu"
                    className="rounded-circle mb-3"
                    width="150"
                    height="150"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                  <h4>Mr. Ganesh Ram Kalu</h4>
                  <p className="text-white-50 mb-4">Principal</p>
                  <blockquote className="blockquote">
                    <p>
                      "It is with great pride and joy that I address you as the
                      principal of Himchuli Academy. Every day, I am inspired by
                      the dedication of our teachers, the enthusiasm of our
                      students, and the unwavering support of our parents and
                      guardians. Together, we create a nurturing environment
                      where learning thrives, character is built, and dreams
                      take flight."
                    </p>
                    <button className="btn nav-btn">Learn More !</button>
                  </blockquote>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-center">
                <Col md={8} lg={6} className="text-center">
                  <img
                    src={vicePrincipal}
                    alt="Academic Director"
                    className="rounded-circle mb-3"
                    width="150"
                    height="150"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                  <h4>Mr. Nirmal Pokharel</h4>
                  <p className="text-white-50 mb-4">Vice - Principal</p>
                  <blockquote className="blockquote">
                    <p>
                      "Our curriculum is designed to challenge students
                      intellectually while nurturing their curiosity and
                      creativity. We emphasize both academic rigor and practical
                      skills, preparing our students to excel in their chosen
                      fields and become responsible global citizens."
                    </p>
                  </blockquote>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>

      {/* Call to Action */}
      <Container className="text-center mb-5">
        <h3>Join the Himchuli Academy Family</h3>
        <p className="lead mb-4">
          Discover how we can help your child achieve their full potential
        </p>
        <button className="btn nav-btn btn-lg px-4 me-2">
          <Link
            to={
              "https://ingrails.com/school/admission/form/himchuli-academy?fbclid=IwY2xjawJwEa5leHRuA2FlbQIxMAABHiz0aJHg1MfzmjyUvOHwh3tHMui5P1nNqiFB3bMPEvecf0EUFzWqBMrhACLK_aem_YKxBYbckSYBhuODSyprtHw"
            }
            target="_blank"
            className="text-light text-decoration-none"
          >
            Apply Now
          </Link>
        </button>
        <Link to="/contact" className="text-decoration-none">
          <button className="btn btn-outline-primary btn-lg px-4">
            Schedule a Visit
          </button>
        </Link>
      </Container>
    </div>
  );
};

export default About;
