import { selectArtistSpotlight } from "../blogs/blogsSlice";
import BlogCard from "../blogs/blogCard";
import PropTypes from "prop-types";

const ArtistSpotlight = ({ sortOption }) => {
  const artistSpotlight = selectArtistSpotlight();

  // Sort the artist spotlight blogs based on the selected sort option
  const sortedBlogs = [...artistSpotlight].sort((a, b) => {
    let ratingA = 0;
    let ratingB = 0;

    switch (sortOption) {
      // Sort alphabetically by title
      case "alphabetical":
        return a.title.localeCompare(b.title);
      // Sort by rating (from local storage), if available
      case "rating":
        ratingA = localStorage.getItem(`rating-${a.id}`) || 0;
        ratingB = localStorage.getItem(`rating-${b.id}`) || 0;
        return ratingB - ratingA;
      // Sort by date, oldest first
      case "oldestFirst":
        return new Date(a.date) - new Date(b.date);
      // Default sorting by date, newest first
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

ArtistSpotlight.propTypes = {
  sortOption: PropTypes.string,
};

export default ArtistSpotlight;
