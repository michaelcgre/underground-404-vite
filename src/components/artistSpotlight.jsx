import { selectArtistSpotlight } from "../blogs/blogsSlice";
import BlogCard from "../blogs/blogCard";

const artistSpotlight = () => {
  const artistSpotlight = selectArtistSpotlight();

  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap gap-5">
      {artistSpotlight.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default artistSpotlight;
