import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-page">
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <h1>Discover Amazing Movies & Shows</h1>

          <p>
            Explore your favorite movies and TV shows, discover new stories,
            and find detailed information about them.
          </p>

          <Link to="/movies" className="cta-button">
            Explore Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;