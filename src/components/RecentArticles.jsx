import { useState, useEffect } from "react";
import { Container, Carousel, CarouselItem, CarouselControl } from "reactstrap";
import { selectAllBlogs } from "../blogs/blogsSlice";
import BlogCard from "../blogs/blogCard";
import "../styles/recent-articles.css";

const BlogCarousel = () => {
  const blogs = selectAllBlogs();
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const totalSlides = Math.ceil(blogs.length / cardsPerSlide);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (nextIndex) => {
    setActiveSlide(nextIndex);
  };

  const lastBlogIndex = blogs.length - 1;

  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth <= 767) {
        setCardsPerSlide(1);
      } else if (window.innerWidth <= 991) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(3);
      }
    };

    updateCardsPerSlide();

    window.addEventListener("resize", updateCardsPerSlide);

    return () => {
      window.removeEventListener("resize", updateCardsPerSlide);
    };
  }, []);

  const showPreviousControl = activeSlide > 0;
  const showNextControl = activeSlide < totalSlides - 1;

  return (
    <div className="recent-articles-section">
      <Container>
        <h2 className="d-flex justify-content-center align-content-center fs-1 mt-4 mb-5 text-center">
          Recent Articles
        </h2>
        <Carousel
          activeIndex={activeSlide}
          next={handleSlideChange}
          previous={handleSlideChange}
          interval={false}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const startIndex = slideIndex * cardsPerSlide;
            const endIndex = startIndex + cardsPerSlide;
            const slideBlogs = blogs.slice(startIndex, endIndex);

            return (
              <CarouselItem key={slideIndex}>
                <div className="row justify-content-center align-content-center">
                  {slideBlogs.map((blog, index) => {
                    const blogIndex = startIndex + index;

                    const blogToShow =
                      blogIndex > lastBlogIndex
                        ? blogs[blogIndex - blogs.length]
                        : blog;

                    return (
                      <div
                        className={`col-md-${12 / cardsPerSlide}`}
                        key={blogIndex}
                      >
                        <BlogCard blog={blogToShow} />
                      </div>
                    );
                  })}
                </div>
              </CarouselItem>
            );
          })}
          {showPreviousControl && (
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={() => handleSlideChange(activeSlide - 1)}
            />
          )}
          {showNextControl && (
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={() => handleSlideChange(activeSlide + 1)}
            />
          )}
        </Carousel>
      </Container>
    </div>
  );
};

export default BlogCarousel;
