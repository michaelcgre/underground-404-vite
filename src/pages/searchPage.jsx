import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { selectAllBlogs } from "../blogs/blogsSlice";
import BlogCard from "../blogs/blogCard";
import { Container } from "reactstrap";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchText = location.state.searchText;
    if (searchText) {
      const blogs = selectAllBlogs();
      const results = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [location.state.searchText]);

  return (
    <div className="page-wrapper">
      <Container className="d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="mb-5 mt-4 mx-2">Search Results</h1>
        <div className="d-flex justify-content-around align-items-center flex-wrap gap-5">
          {searchResults.map((result, index) => (
            <BlogCard key={index} blog={result} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default SearchPage;
