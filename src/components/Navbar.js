import React from 'react';
// import './css/Nav.css';
import useGithubUser from './hooks/useGithubUser';

function Navbar() {
  const githubUser = useGithubUser('chriszam');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container"> {/* Add a container for better layout */}
        <a className="navbar-brand" href="/">
          Home
        </a>

        {githubUser ? (
          <span>id: {githubUser.id}</span>
        ) : (
          <span>Loading...</span>
        )}

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href='https://www.google.com'>Google</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
