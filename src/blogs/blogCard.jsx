import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import "../styles/blog-card.css";

const blogCard = ({ blog }) => {
  return (
    <div className="d-flex justify-content-center align-content-center">
      <Card key={blog.id} className="mb-4 card text-center">
        <Link to={`/blogs/${blog.id}`}>
          <CardImg top width="100%" src={blog.blogImage} alt={blog.title} />
        </Link>
        <CardBody className="card-body">
          <CardTitle>
            <Link className="title-link" to={`/blogs/${blog.id}`}>
              <span className="card-title fw-bold">{blog.title}</span>
            </Link>
          </CardTitle>
          <CardText className="card-text">{blog.description}</CardText>
          <div className="text-end">
            <Button className="card-btn" tag={Link} to={`/blogs/${blog.id}`}>
              Read More
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default blogCard;
