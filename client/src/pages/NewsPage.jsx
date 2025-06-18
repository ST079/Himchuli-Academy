import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Badge,
  Spinner,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NewsPage.css";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://yourdomain.com/api/get_news.php");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setNews(data.news);
        setEvents(data.events);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
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
        Error loading news: {error}
      </div>
    );
  }

  return (
    <div className="news-page">
      {/* Hero Section */}
      <div className="news-hero text-center py-5 mb-4">
        <Container>
          <h1 className="display-4">Himchuli Academy News</h1>
          <p className="lead">
            Stay updated with the latest announcements and happenings
          </p>
        </Container>
      </div>

      <Container>
        <Row>
          {/* Main News Column */}
          <Col lg={8}>
            <h2 className="section-title mb-4">Latest News</h2>

            {news.length > 0 ? (
              news.map((item) => (
                <Card
                  key={item.id}
                  className={`mb-4 news-card ${
                    item.is_important ? "important-news" : ""
                  }`}
                >
                  <Card.Body>
                    <div className="d-flex justify-content-between mb-2">
                      <Badge bg={item.is_important ? "danger" : "primary"}>
                        {item.category}
                      </Badge>
                      <small className="text-muted">
                        {new Date(item.date_posted).toLocaleDateString()}
                      </small>
                    </div>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.summary}</Card.Text>
                    {item.image && (
                      <div className="mb-3">
                        <img
                          src={`http://yourdomain.com/uploads/news/${item.image}`}
                          alt={item.title}
                          className="img-fluid rounded"
                        />
                      </div>
                    )}
                    <Button
                      variant="outline-primary"
                      size="sm"
                      href={`/news/${item.id}`}
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <div className="text-center py-5">
                <p>No news items found.</p>
              </div>
            )}

            {/* Archive Link */}
            <div className="text-center mt-4">
              <Button variant="link" href="/news/archive">
                View News Archive
              </Button>
            </div>
          </Col>

          {/* Sidebar Column */}
          <Col lg={4}>
            {/* Upcoming Events */}
            <Card className="mb-4">
              <Card.Header as="h5">Upcoming Events</Card.Header>
              <ListGroup variant="flush">
                {events.length > 0 ? (
                  events.map((event) => (
                    <ListGroup.Item key={event.id} className="py-3">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h6 className="mb-1">{event.title}</h6>
                          <small className="text-muted">
                            {new Date(event.event_date).toLocaleDateString()} at{" "}
                            {event.event_time}
                          </small>
                        </div>
                        <Badge
                          bg="light"
                          text="dark"
                          className="align-self-center"
                        >
                          {event.location}
                        </Badge>
                      </div>
                    </ListGroup.Item>
                  ))
                ) : (
                  <ListGroup.Item className="py-3 text-center">
                    <small>No upcoming events</small>
                  </ListGroup.Item>
                )}
              </ListGroup>
              <Card.Footer className="text-center">
                <Button variant="link" size="sm" href="/events">
                  View Full Calendar
                </Button>
              </Card.Footer>
            </Card>

            {/* Quick Links */}
            <Card className="mb-4">
              <Card.Header as="h5">Quick Links</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item action href="/prospectus">
                  School Prospectus
                </ListGroup.Item>
                <ListGroup.Item action href="/calendar">
                  Academic Calendar
                </ListGroup.Item>
                <ListGroup.Item action href="/gallery">
                  Photo Gallery
                </ListGroup.Item>
                <ListGroup.Item action href="/contact">
                  Contact Information
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsPage;
