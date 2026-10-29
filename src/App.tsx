export default function App() {
  return (
    <div className="page-wrapper">
      {/* Subtle ambient grid pattern */}
      <div className="bg-ambient" aria-hidden="true" />

      {/* Navigation Bar */}
      <header className="navbar">
        <div className="container nav-container">
          <a href="#" className="brand-wrapper" aria-label="Nqu Buna Home">
            <div className="brand-icon">
              {/* Coffee Bean vector emblem */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8c0 4.5-3 9-6 11-3-2-6-6.5-6-11a6 6 0 0 1 12 0Z" />
                <path d="M12 4c.5 3-1 6-1 9 0 3 1.5 5 1 8" />
              </svg>
            </div>
            <div>
              <span className="brand-name">Nqu Buna</span>
              <span className="brand-origin">ንቁ ቡና • Highland Specialty</span>
            </div>
          </a>

          <nav>
            <ul className="nav-links">
              <li>
                <a href="#heritage" className="nav-link">Our Heritage</a>
              </li>
              <li>
                <a href="#origins" className="nav-link">Single Origins</a>
              </li>
              <li>
                <a href="#roast" className="nav-link">The Roast</a>
              </li>
              <li>
                <a href="#ceremony" className="nav-link">The Ceremony</a>
              </li>
            </ul>
          </nav>

          <a href="#explore" className="nav-cta">
            Reserve Batch
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            {/* Origin Badge */}
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span>Born in the Highlands of Ethiopia</span>
            </div>

            {/* Headline */}
            <h1 className="hero-headline">
              The Pure Soul of{' '}
              <span className="highlight-gold">Ethiopian Coffee</span>
            </h1>

            {/* Description */}
            <p className="hero-description">
              Sourced directly from the lush, misty mountain canopies of Yirgacheffe,
              Sidama, and Guji. Nqu Buna honors the sacred cradle of coffee with rare,
              naturally cultivated heirloom varieties roasted with uncompromising reverence.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions" id="explore">
              <button
                className="btn-primary"
                onClick={() => {
                  alert('Welcome to Nqu Buna! Product collection coming soon.')
                }}
              >
                <span>Explore Our Coffee</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <a href="#origins" className="btn-secondary">
                <span>Discover The Origins</span>
              </a>
            </div>

            {/* Coffee Animation Video Placeholder */}
            <div className="animation-stage-wrapper">
              <div className="animation-stage-glow" aria-hidden="true" />
              <div className="video-placeholder-container">
                <div className="placeholder-frame">
                  <div className="placeholder-icon-ring">
                    {/* Visual Film / 3D Animation Indicator */}
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <h2 className="placeholder-title">
                    Coffee Animation Video Stage
                  </h2>
                  <p className="placeholder-desc">
                    This dedicated stage is reserved for your custom coffee animation video
                    or scroll-driven interactive sequence.
                  </p>
                  <span className="placeholder-pill">
                    Ready for your media asset
                  </span>
                </div>
              </div>
            </div>

            {/* Highland Coffee Attributes */}
            <div className="hero-features">
              <div className="feature-pill">
                <h3 className="feature-pill-title">Heirloom Varieties</h3>
                <p className="feature-pill-sub">Wild Indigenous Arabica</p>
              </div>
              <div className="feature-pill">
                <h3 className="feature-pill-title">2,200m Elevation</h3>
                <p className="feature-pill-sub">Strictly High Grown (SHG)</p>
              </div>
              <div className="feature-pill">
                <h3 className="feature-pill-title">Direct Trade</h3>
                <p className="feature-pill-sub">Smallholder Partner Farms</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            © {new Date().getFullYear()} Nqu Buna. Handcrafted Ethiopian Specialty Coffee.
          </p>
          <p className="footer-quote">
            “Buna dabo naw” — Coffee is our bread, our ceremony, our pride.
          </p>
        </div>
      </footer>
    </div>
  )
}

