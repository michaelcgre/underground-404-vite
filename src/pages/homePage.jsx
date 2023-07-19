import BannerCarousel from "../components/Banner";
import BlogCarousel from "../components/RecentArticles";
import DescriptionAndTapIn from "../components/DescriptionAndTapIn";

const HomePage = () => {
  return (
    <div>
      <BannerCarousel />
      <BlogCarousel />
      <DescriptionAndTapIn />
    </div>
  );
};

export default HomePage;
