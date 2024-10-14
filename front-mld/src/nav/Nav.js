import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';  // Custom CSS

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Miloudi</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto" style={{marginLeft:'50px'}}>
              <li className="nav-item">
                <a className="nav-link" href="#">A propos de nous</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Recrutement</a>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Nettoyage</a></li>
                  <li><a className="dropdown-item" href="#">Securité</a></li>
                </ul>
              </li>

            </ul>
          </div>
          <div >
            <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <a className="nav-link" href="#">Sign up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
