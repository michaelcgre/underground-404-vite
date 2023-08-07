import ArtistSpotlight from "../components/artistSpotlight";
import { useState } from "react";

const ArtistSpotlightPage = () => {
  const [sortOption, setSortOption] = useState("");

  return (
    <div className="d-flex flex-column justify-content-center align-items-center page-wrapper text-center">
      <h1 className="my-4 mx-2">Artist Spotlight</h1>
      <div className="mb-5">
        <label className="mx-2 fs-5">Sort by: </label>
        <select
          className="sort-select rounded"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="date">Date (Newest first)</option>
          <option value="oldestFirst">Date (Oldest first)</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <ArtistSpotlight sortOption={sortOption} />
    </div>
  );
};

export default ArtistSpotlightPage;
