function MovieCard({ movie, onDetails }) {
  const image = movie.image?.medium || "https://via.placeholder.com/300x450";

  const year = movie.premiered
    ? new Date(movie.premiered).getFullYear()
    : "N/A";

  const rating = movie.rating?.average || "N/A";

  return (
    <div className="movie-card">
      <img
        src={image}
        alt={movie.name}
        className="movie-poster"
      />

      <div className="movie-info">
        <h3>{movie.name}</h3>

        <p>
          ⭐ {rating} &nbsp; • &nbsp; 📅 {year}
        </p>

        <button onClick={() => onDetails(movie)}>
          See Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;