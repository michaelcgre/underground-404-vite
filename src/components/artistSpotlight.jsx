import { selectArtistSpotlight } from "../blogs/blogsSlice";
import { Container, Row, Col } from "reactstrap";
import BlogCard from "../blogs/blogCard";

const artistSpotlight = () => {
  const artistSpotlight = selectArtistSpotlight();

  return (
    <Container>
      <Row>
        {artistSpotlight.map((blog) => (
          <Col key={blog.id}>
            <BlogCard blog={blog} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default artistSpotlight;
