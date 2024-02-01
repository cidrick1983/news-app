const NavBar = ({ setCategory, setCountry }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark">My News</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" role="button">
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory('technology')}
              >
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory('business')}>
                Business
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory('health')}>
                Health
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory('science')}>
                Science
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory('science')}>
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory('entertainment')}
              >
                Entertainment
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCountry('us')}>
                US
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCountry('ph')}>
                Philippines
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCountry('sa')}>
                Saudi Arabia
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCountry('nz')}>
                New Zealand
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
