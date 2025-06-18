import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Carousel,
  Spinner,
  Alert,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BeyondAcademics.css";

const BeyondAcademics = () => {
  const [featuredActivities, setFeaturedActivities] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://yourdomain.com/api/get_beyond_academics.php"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFeaturedActivities(data.featured);
        setActivities(data.activities);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get unique categories for filter
  const categories = [
    "All",
    ...new Set(activities.map((activity) => activity.category)),
  ];

  // Filter activities by category
  const filteredActivities =
    activeCategory === "All"
      ? activities
      : activities.filter((activity) => activity.category === activeCategory);

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
        Error loading activities: {error}
      </div>
    );
  }

  return (
    <div className="beyond-academics-page">
      {/* Hero Section */}
      <div className="hero-section text-center py-5 mb-4">
        <Container>
          <h1 className="display-4">Beyond Academics</h1>
          <p className="lead">
            Exploring talents, building character, and creating memories
          </p>
        </Container>
      </div>

      {/* Featured Activities Carousel */}
      {featuredActivities.length > 0 && (
        <Container className="mb-5">
          <h2 className="section-title mb-4">Featured Activities</h2>
          <Carousel>
            {featuredActivities.map((activity) => (
              <Carousel.Item key={activity.id}>
                <img
                  className="d-block w-100 carousel-image"
                  src={`http://yourdomain.com/uploads/activities/${activity.image}`}
                  alt={activity.title}
                />
                <Carousel.Caption>
                  <h3>{activity.title}</h3>
                  <p>{activity.short_description}</p>
                  <Button
                    variant="outline-light"
                    href={`/beyond-academics/${activity.id}`}
                  >
                    Learn More
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      )}

      {/* All Activities Grid */}
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title">Our Activities</h2>
          <div className="category-filter">
            <select
              className="form-select"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredActivities.length > 0 ? (
          <Row xs={1} md={2} lg={3} className="g-4">
            {filteredActivities.map((activity) => (
              <Col key={activity.id}>
                <Card className="h-100 activity-card">
                  <Card.Img
                    variant="top"
                    src={`http://yourdomain.com/uploads/activities/${activity.image}`}
                    alt={activity.title}
                  />
                  <Card.Body>
                    <span className="badge bg-primary mb-2">
                      {activity.category}
                    </span>
                    <Card.Title>{activity.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {new Date(activity.activity_date).toLocaleDateString()}
                    </Card.Subtitle>
                    <Card.Text>{activity.short_description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      variant="outline-primary"
                      href={`/beyond-academics/${activity.id}`}
                    >
                      View Details
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Alert variant="info" className="text-center">
            No activities found in this category.
          </Alert>
        )}
      </Container>

      {/* Newsletter Section */}
      <div className="newsletter-section py-5 mt-5">
        <Container className="text-center">
          <h2>Stay Updated</h2>
          <p>
            Subscribe to our newsletter to receive updates about our
            extracurricular programs
          </p>
          <div className="d-flex justify-content-center">
            <div className="w-75">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BeyondAcademics;
