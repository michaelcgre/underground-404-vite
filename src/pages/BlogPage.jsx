import { useParams } from "react-router-dom";
import { blogs } from "../blogs/blogs";
import { Container, Col, Row } from "reactstrap";
import YouMightLike from "../components/MightLike";
import { DiscussionEmbed } from "disqus-react";
import StarRating from "../components/StarRating";

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="page-wrapper">
      <Container className="pt-4">
        <Row>
          <Col lg="8">
            <img
              className="img-fluid rounded"
              src={blog.blogHeader}
              alt={blog.title}
            />
            <h1 className="mt-2">{blog.title}</h1>
            <div className="d-flex justify-content-between my-3 author-and-date text-secondary">
              <span>{blog.author}</span>
              <StarRating blogId={blog.id} />
              <span>{blog.date}</span>
            </div>
            <p className="fs-5">{blog.paragraphOne}</p>
            <p className="fs-5">{blog.paragraphTwo}</p>
            <p className="fs-5">{blog.paragraphThree}</p>
            <div className="d-flex justify-content-center align-content-center my-3">
              <img
                className="img-fluid rounded my-3"
                src={blog.extraImage}
                alt={blog.title}
              />
            </div>
            <p className="fs-5">{blog.paragraphFour}</p>
            <p className="fs-5">{blog.paragraphFive}</p>
            <p className="fs-5">{blog.paragraphSix}</p>
            <p className="fs-5">{blog.paragraphSeven}</p>
            <p className="fs-5">{blog.paragraphEight}</p>
          </Col>
          <Col className="d-flex justify-content-center align-items-center flex-column mt-4 mt-lg-0 d-lg-block">
            <iframe
              title="blog-spotify"
              src={blog.spotify}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{ maxWidth: "516px" }}
            ></iframe>
            <YouMightLike className="mt-3" currentBlogId={Number(id)} />
          </Col>
        </Row>
        <Row className="mt-5">
          <DiscussionEmbed
            shortname="underground404-com"
            config={{
              url: window.location.href,
              identifier: String(blog.id),
              title: blog.title,
              language: "zh_EN",
            }}
          />
        </Row>
      </Container>
    </div>
  );
};

export default BlogPage;
