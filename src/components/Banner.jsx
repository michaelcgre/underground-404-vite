import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import { selectFeaturesBlogs } from "../blogs/blogsSlice";
import "../styles/banner.css";

function BannerCarousel() {
  const featuredBlogs = selectFeaturesBlogs();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Function to go to the next slide
  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === featuredBlogs.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  // Function to go to the previous slide
  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? featuredBlogs.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  // Function to go to a specific slide
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = featuredBlogs.map((blog, index) => {
    return (
      <CarouselItem
        tag="div"
        key={index}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        className="banner-carousel-item"
      >
        <Link to={`/blogs/${blog.id}`} className="carousel-link">
          <img
            className="banner-images img-fluid"
            src={blog.carouselImage}
            alt={blog.title}
          />
          <CarouselCaption
            className="banner-carousel-title fs-1 fw-bold"
            captionText={blog.title}
          />
        </Link>
      </CarouselItem>
    );
  });

  return (
    <div className="banner-wrapper">
      <Container className="banner-carousel-section d-flex flex-column align-items-center justify-content-center">
        <h1 className="banner-title mb-5 text-center">Beyond the Mainstream</h1>
        <Carousel
          className="banner-carousel mb-5"
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators
            items={featuredBlogs}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
            className="banner-carousel-indicators"
          />
          {slides}
        </Carousel>
      </Container>
    </div>
  );
}

export default BannerCarousel;
