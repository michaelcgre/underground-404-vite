import { selectMusisReviews } from "../blogs/blogsSlice";
import BlogCard from "../blogs/blogCard";

const MusicReviews = () => {
  const musicReviews = selectMusisReviews();

  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap gap-5">
      {musicReviews.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default MusicReviews;
