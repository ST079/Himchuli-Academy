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
import Pagination from "../components/Pagination"; // Import the pagination component
import { Link } from "react-router-dom";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemsPerPage: 2, // Default items per page
    totalItems: 0,
  });

  const fetchNews = async (page = 1, limit = pagination.itemsPerPage) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://himchuliacademy.edu.np/database/get_news.php?page=${page}&per_page=${limit}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setNews(data.news);
      setEvents(data.events);
      setPagination((prev) => ({
        ...prev,
        currentPage: data.pagination.current_page,
        totalItems: data.pagination.total_items,
      }));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handlePageChange = (newPage) => {
    fetchNews(newPage, pagination.itemsPerPage);
  };

  const handleItemsPerPageChange = (newLimit) => {
    setPagination((prev) => ({ ...prev, itemsPerPage: newLimit }));
    fetchNews(1, newLimit); // Reset to first page when changing items per page
  };

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

  console.log("News data:", news);
  news.map((item) => {
    console.log("News item:", item.is_important);
    if (item.is_important) {
      console.log("Important news item:", typeof item.title);
    }
  });
  return (
    <div className="news-page bg container p-4">
      {/* Hero Section */}
      <div className="news-hero text-center py-5 mb-4">
        <Container>
          <h1 className="display-4 fw-bolder text-white">
            Himchuli Academy News
          </h1>
          <p className="lead text-white">
            Stay updated with the latest announcements and happenings
          </p>
        </Container>
      </div>

      <Container>
        <Row>
          {/* Main News Column */}
          <Col lg={8}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="section-title mb-0">Latest News</h2>
              {news.length > 0 && (
                <small className="text-muted">
                  Showing{" "}
                  {(pagination.currentPage - 1) * pagination.itemsPerPage + 1}-
                  {Math.min(
                    pagination.currentPage * pagination.itemsPerPage,
                    pagination.totalItems
                  )}{" "}
                  of {pagination.totalItems} items
                </small>
              )}
            </div>

            {news.length > 0 ? (
              news.map((item) => (
                <Card
                  key={item.id}
                  className={`mb-4 news-card ${
                    item.is_important == 1 ? "important-news" : ""
                  }`}
                >
                  <Card.Body>
                    <div className="d-flex justify-content-between mb-2">
                      <Badge bg={item.is_important == 1 ? "danger" : "primary"}>
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
                          src={`https://himchuliacademy.edu.np/database/uploads/news/${item.image}`}
                          alt={item.title}
                          className="img-fluid rounded"
                        />
                      </div>
                    )}
                    <Link to={`/news-events/${item.id}`}>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      >
                      Read More
                    </Button>
                      </Link>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <div className="text-center py-5">
                <p>No news items found.</p>
              </div>
            )}

            {/* Pagination Component */}
            {pagination.totalItems > 0 && (
              <Pagination
                data={{ total: pagination.totalItems }}
                limit={pagination.itemsPerPage}
                page={pagination.currentPage}
                setLimit={handleItemsPerPageChange}
                setPage={handlePageChange}
              />
            )}
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
                <Button
                  variant="link"
                  size="sm"
                  href="/contact"
                  className="text-decoration-none"
                >
                  <i className="bi bi-envelope-fill"></i>
                  Contact Us for More Detail
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
                <ListGroup.Item action href="/about">
                  About Us
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
