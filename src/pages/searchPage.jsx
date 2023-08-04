import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { selectAllBlogs } from "../blogs/blogsSlice";
import BlogCard from "../blogs/blogCard";

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
    <div>
      {searchResults.map((result, index) => (
        <BlogCard key={index} blog={result} />
      ))}
    </div>
  );
};

export default SearchPage;
