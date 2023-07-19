import MusicReviews from "../components/MusicReviews";

const musicReviewPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center page-wrapper text-center">
      <h1 className="mb-5 mt-4 mx-2">Music Reviews</h1>
      <MusicReviews />
    </div>
  );
};

export default musicReviewPage;
