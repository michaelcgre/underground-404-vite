import { selectAllBlogs } from "../blogs/blogsSlice";
import BlogCard from "../blogs/blogCard";

const YouMightLike = ({ currentBlogId }) => {
  const blogs = selectAllBlogs();

  const randomIndexes = [];
  while (randomIndexes.length < 2) {
    const randomIndex = Math.floor(Math.random() * blogs.length);
    const randomBlog = blogs[randomIndex];
    if (
      !randomIndexes.includes(randomIndex) &&
      randomBlog.id !== currentBlogId
    ) {
      randomIndexes.push(randomIndex);
    }
  }

  return (
    <div className="mt-4">
      <h2 className="text-center mb-4">You Might Like:</h2>
      <div className="card-container d-md-flex gap-5 justify-content-center align-items-center d-lg-block">
        {randomIndexes.map((index) => {
          const blog = blogs[index];
          return <BlogCard key={blog.id} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default YouMightLike;
