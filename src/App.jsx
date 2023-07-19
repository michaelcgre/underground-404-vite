import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import ArtistSpotlight from "./pages/artistSpotlightPage";
import MusicReviews from "./pages/musicReviewPage";
import Lifestyle from "./pages/lifestylePage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="artistSpotlight" element={<ArtistSpotlight />} />
        <Route path="musicReviews" element={<MusicReviews />} />
        <Route path="lifestyle" element={<Lifestyle />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
