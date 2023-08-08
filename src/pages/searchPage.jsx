import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { selectAllBlogs } from "../blogs/blogsSlice";
import BlogCard from "../blogs/blogCard";
import { Container } from "reactstrap";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  // Location object to get the search text from the state
  const location = useLocation();

  // Effect to run when search text changes
  useEffect(() => {
    // Extract search text from location state
    const searchText = location.state.searchText;

    if (searchText) {
      const blogs = selectAllBlogs();

      // Filter blogs that contain the search text in their title
      const results = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchText.toLowerCase())
      );
      // Update state with search results
      setSearchResults(results);
    } else {
      // If no search text, clear results
      setSearchResults([]); // Effect dependency on search text
    }
  }, [location.state.searchText]);

  return (
    <div className="page-wrapper">
      <Container className="d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="mb-5 mt-4 mx-2">Search Results</h1>
        {searchResults.length > 0 ? (
          <div className="d-flex justify-content-around align-items-center flex-wrap gap-5">
            {searchResults.map((result, index) => (
              <BlogCard key={index} blog={result} />
            ))}
          </div>
        ) : (
          <p className="fs-2 fw-bold no-results">No results found</p>
        )}
      </Container>
    </div>
  );
};

export default SearchPage;
