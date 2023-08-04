import { useState } from "react";
import {
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Input,
  Container,
} from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";
import Underground404Logo from "../assets/underground-404-logo.png";
import { selectAllBlogs } from "../blogs/blogsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value) {
      const blogs = selectAllBlogs();
      const results = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchIconClick = () => {
    navigate("/searchPage", { state: { searchText } });
  };

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
            <Nav
              className="ms-auto d-flex justify-content-center align-items-center gap-3"
              navbar
            >
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
                  className="nav-link fw-bold text-uppercase fs-5 text-center"
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
              <NavItem>
                <div className="search-container d-flex justify-content-center align-items-center gap-1">
                  <Input
                    type="search"
                    value={searchText}
                    onChange={handleSearchChange}
                    placeholder="Search"
                    className="search-input"
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="search-icon text-success fs-4"
                    onClick={handleSearchIconClick}
                  />
                </div>
                <div className="search-results position-absolute z-1 bg-light overflow-y-auto">
                  {searchResults &&
                    searchResults.map((result, index) => (
                      <Link key={index} to={`/blogs/${result.id}`}>
                        <p className="text-success">{result.title}</p>
                      </Link>
                    ))}
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
