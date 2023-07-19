import { selectMusisReviews } from "../blogs/blogsSlice";
import { Container, Row, Col } from "reactstrap";
import BlogCard from "../blogs/blogCard";

const MusicReviews = () => {
  const musicReviews = selectMusisReviews();

  return (
    <Container>
      <Row>
        {musicReviews.map((blog) => (
          <Col key={blog.id}>
            <BlogCard blog={blog} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MusicReviews;
