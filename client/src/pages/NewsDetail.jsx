import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  Button,
  Badge,
  Spinner,
  Alert,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NewsDetail.css";

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newsItem, setNewsItem] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost/database/get_news_detail.php?id=${id}`
        );

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();

        if (!data.success) throw new Error(data.error || "News not found");

        setNewsItem(data.news);
        setRelatedNews(data.related);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id]);

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" />
        <p>Loading news article...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <div className="container bg">
        <Container className="my-5">
          <Alert variant="danger">
            <Alert.Heading>Error loading news</Alert.Heading>
            <p>{error}</p>
            <Button variant="primary" onClick={() => navigate("/news-events")}>
              Back to News
            </Button>
          </Alert>
        </Container>
      </div>
    );
  }

  if (!newsItem) {
    return (
      <Container className="my-5">
        <Alert variant="warning">
          <Alert.Heading>News article not found</Alert.Heading>
          <p>The requested news article could not be found.</p>
          <Button variant="primary" onClick={() => navigate("/news-events")}>
            Back to News
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <div className="container bg p-4">
      <Container className="my-5 news-detail">
        <Button
          variant="outline-secondary"
          onClick={() => navigate("/news-events")}
          className="mb-4"
        >
          &larr; Back to News
        </Button>

        <Card className={`mb-5 ${newsItem.is_important == 1 ? "important-news" : ""}`}>
          {newsItem.image && (
            <Card.Img
              variant="top"
              src={`http://localhost/database/uploads/news/${newsItem.image}`}
              alt={newsItem.title}
            />
          )}
          <Card.Body>
            <div className="d-flex justify-content-between mb-3">
              <Badge bg="info">{newsItem.category}</Badge>
              <small className="text-muted">
                {new Date(newsItem.date_posted).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </small>
            </div>
            <Card.Title as="h1" className="mb-4">
              {newsItem.title}
            </Card.Title>
            <div
              className="news-content"
              dangerouslySetInnerHTML={{ __html: newsItem.content }}
            />
          </Card.Body>
        </Card>

        {relatedNews.length > 0 && (
          <section className="related-news mt-5">
            <h2 className="mb-4">Related News</h2>
            <div className="related-grid">
              {relatedNews.map((item) => (
                <Card key={item.id} className="related-card">
                  <Card.Body>
                    <Card.Title as="h3" className="h5">
                      {item.title}
                    </Card.Title>
                    <small className="text-muted">
                      {new Date(item.date_posted).toLocaleDateString()}
                    </small>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="mx-2"
                      onClick={() => navigate(`/news-events/${item.id}`)}
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </section>
        )}
      </Container>
    </div>
  );
};

export default NewsDetail;
