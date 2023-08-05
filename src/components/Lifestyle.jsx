import { selectLifestyle } from "../blogs/blogsSlice";
import BlogCard from "../blogs/blogCard";

const Lifestyle = () => {
  const lifestyle = selectLifestyle();

  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap gap-5">
      {lifestyle.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Lifestyle;
