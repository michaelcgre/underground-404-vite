import { blogs } from "./blogs";

export const selectFeaturesBlogs = () => {
  const featuredBlogs = blogs.filter((blog) => blog.featured);
  return featuredBlogs;
};

export const selectAllBlogs = () => {
  return blogs;
};

export const selectArtistSpotlight = () => {
  const artistSpotlight = blogs.filter(
    (blog) => blog.blogType === "Artist Spotlight"
  );
  return artistSpotlight;
};

export const selectMusisReviews = () => {
  const musicReviews = blogs.filter((blog) => blog.blogType === "Music Review");
  return musicReviews;
};

export const selectLifestyle = () => {
  const lifestyle = blogs.filter((blog) => blog.blogType === "Lifestyle");
  return lifestyle;
};
