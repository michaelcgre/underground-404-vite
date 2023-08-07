import { selectLifestyle } from "../blogs/blogsSlice";
import BlogCard from "../blogs/blogCard";
import PropTypes from "prop-types";

const Lifestyle = ({ sortOption }) => {
  const lifestyle = selectLifestyle();

  const sortedBlogs = [...lifestyle].sort((a, b) => {
    let ratingA = 0;
    let ratingB = 0;

    switch (sortOption) {
      case "alphabetical":
        return a.title.localeCompare(b.title);
      case "rating":
        ratingA = localStorage.getItem(`rating-${a.id}`) || 0;
        ratingB = localStorage.getItem(`rating-${b.id}`) || 0;
        return ratingB - ratingA;
      case "oldestFirst":
        return new Date(a.date) - new Date(b.date);
      case "date":
      default:
        return new Date(b.date) - new Date(a.date);
    }
  });

  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap gap-5">
      {sortedBlogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

Lifestyle.propTypes = {
  sortOption: PropTypes.string,
};

export default Lifestyle;
