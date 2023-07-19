import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import FooterLogo from "../assets/footer-logo.png";
import { NavbarBrand } from "reactstrap";

const Footer = () => {
  return (
    <footer className="site-footer pt-5 pt-md-0">
      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-center text-center">
            <h5 className="fs-2 fw-bold text-uppercase">Directory</h5>
            <ul className="list-unstyled">
              <li className="my-2 text-uppercase fs-5">
                <Link className="nav-link" to="/artistSpotlight">
                  Artist Spotlight
                </Link>
              </li>
              <li className="my-2 text-uppercase fs-5">
                <Link className="nav-link" to="/musicReviews">
                  Music Reviews
                </Link>
              </li>
              <li className="my-2 text-uppercase fs-5">
                <Link className="nav-link" to="/lifestyle">
                  Lifestyle
                </Link>
              </li>
            </ul>
          </Col>
          <Col
            md="6 mb-4"
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <NavbarBrand href="/">
              <img
                src={FooterLogo}
                alt="Underground 404 Logo"
                className="navbar-logo"
              />
            </NavbarBrand>
            <p className="text-white">
              Made with passion for independent artists.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
