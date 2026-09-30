function MovieModal({ movie, onClose }) {
  if (!movie) {
    return null;
  }

  const image =
    movie.image?.original ||
    movie.image?.medium ||
    "https://via.placeholder.com/800x450";

  const rating = movie.rating?.average || "N/A";

  const year = movie.premiered
    ? new Date(movie.premiered).getFullYear()
    : "N/A";

  return (
    <div className="modal-overlay" onClick={onClose}>

      <div
        className="movie-modal"
        onClick={(event) => event.stopPropagation()}
      >

        {/* Close X button */}
        <button
          className="modal-close"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Movie Backdrop */}
        <img
          src={image}
          alt={movie.name}
          className="modal-image"
        />

        {/* Movie Information */}
        <div className="modal-body">

          <h2>{movie.name}</h2>

          <div className="movie-meta">
            <span>⭐ Rating: {rating}</span>

            <span>|</span>

            <span>📅 Release: {year}</span>
          </div>

          <h3>Overview:</h3>

          <div
            className="movie-summary"
            dangerouslySetInnerHTML={{
              __html:
                movie.summary ||
                "No description available.",
            }}
          />

          {movie.genres?.length > 0 && (
            <p className="genres">
              🎭 Genre: {movie.genres.join(", ")}
            </p>
          )}

          {/* Close button */}
          <div className="modal-footer">
            <button
              className="close-modal-button"
              onClick={onClose}
            >
              ❌ Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MovieModal;