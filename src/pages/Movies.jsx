import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

import {
  getAllShows,
  searchShows,
} from "../services/api";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      setLoading(true);

      const data = await getAllShows();

      setMovies(data);
      setError("");
    } catch (error) {
      setError("Failed to load movies.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (event) => {
    const query = event.target.value;

    setSearch(query);

    if (!query.trim()) {
      loadMovies();
      return;
    }

    try {
      setLoading(true);

      const data = await searchShows(query);

      const shows = data.map((item) => item.show);

      setMovies(shows);
      setError("");
    } catch (error) {
      setError("Search failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <main className="movies-page">
        <h1>Explore Movies & Shows</h1>

        <input
          type="text"
          placeholder="🔍 Search for a movie..."
          value={search}
          onChange={handleSearch}
          className="search-input"
        />

        {loading && <p>Loading...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && (
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onDetails={setSelectedMovie}
              />
            ))}
          </div>
        )}
      </main>

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

      <Footer />
    </div>
  );
}

export default Movies;