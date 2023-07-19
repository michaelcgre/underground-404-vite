import { useState } from "react";
import { Collapse, NavbarToggler, Nav, NavItem, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";
import Underground404Logo from "../assets/underground-404-logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header-wrapper">
      <Container>
        <Navbar sticky="top" expand="lg" className="nav-background">
          <NavbarBrand href="/">
            <img
              src={Underground404Logo}
              alt="Underground 404 Logo"
              className="navbar-logo"
            />
          </NavbarBrand>

          <NavbarToggler
            className="navbar-dark"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <Collapse isOpen={menuOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink
                  className="nav-link fw-bold text-uppercase fs-5 text-center"
                  to="/artistSpotlight"
                >
                  Artist Spotlight
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link fw-bold text-uppercase fs-5 text-center mx-3"
                  to="/musicReviews"
                >
                  Music Reviews
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link fw-bold text-uppercase fs-5 text-center"
                  to="/lifestyle"
                >
                  Lifestyle
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
