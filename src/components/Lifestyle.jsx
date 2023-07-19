import { selectLifestyle } from "../blogs/blogsSlice";
import { Container, Row, Col } from "reactstrap";
import BlogCard from "../blogs/blogCard";

const Lifestyle = () => {
  const lifestyle = selectLifestyle();

  return (
    <Container>
      <Row>
        {lifestyle.map((blog) => (
          <Col key={blog.id}>
            <BlogCard blog={blog} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Lifestyle;
