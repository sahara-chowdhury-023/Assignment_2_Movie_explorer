function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <h2>🎬 MovieExplorer</h2>

        <p>
          Discover your favorite movies and TV shows.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a 
          href="https://facebook.com/" 
          target ="_blank" rel="noopener noreferrer"
          >
            Facebook
          </a>

          <a href="#" onClick={(e) => e.preventDefault()}>
            Instagram
          </a>
        </div>

        <p className="copyright">
          © 2026 MovieExplorer.
        </p>

      </div>
    </footer>
  );
}

export default Footer;