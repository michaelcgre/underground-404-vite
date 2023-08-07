import { useState, useRef, useEffect } from "react";
import {
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Input,
  Container,
} from "reactstrap";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
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

  const searchResultsRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      searchResultsRef.current &&
      !searchResultsRef.current.contains(event.target)
    ) {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    setSearchText("");
  }, [location.pathname]);

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
              className="mx-auto d-flex justify-content-between align-items-center gap-3 w-100"
              navbar
            >
              <div className="d-flex align-items-center justify-content-center gap-4 flex-grow-1 flex-column flex-lg-row">
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
              </div>

              <div>
                <div className="search-container d-flex justify-content-center align-items-center gap-2 mb-2 mb-lg-0">
                  <Input
                    type="search"
                    value={searchText}
                    onChange={handleSearchChange}
                    placeholder="Search"
                    className="search-input shadow-none"
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="search-icon fs-4"
                    onClick={handleSearchIconClick}
                  />
                </div>
                <div
                  className="search-results rounded-bottom position-absolute z-1 overflow-y-auto"
                  ref={searchResultsRef}
                >
                  {searchResults &&
                    searchResults.map((result, index) => (
                      <Link
                        className="search-link"
                        key={index}
                        to={`/blogs/${result.id}`}
                      >
                        <p className="search-result my-auto p-2">
                          {result.title}
                        </p>
                      </Link>
                    ))}
                </div>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
