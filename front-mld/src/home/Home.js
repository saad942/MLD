import React from 'react';
import './Home.css'; // Your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'; 

function Home() {
  return (
    <div className="cont">
      <div className="row align-items-center">
        <div className="col-md-8 Home">
          <h1 style={{ fontSize: '80px' }}>Securité &<span style={{ color: '#28a745' }}> Nettoyage</span>
          </h1>
          <p>Safety and cleanliness, supported by protocols and security measures,<br /> ensure a secure and protected environment.</p>
          <button className="btn btn-success">Join-us</button>
        </div>

        <div className="col-md-4 log" style={{ textAlign: 'center', padding: '20px' }}>
          <h3 className="text-success" style={{ backgroundColor: 'white', borderRadius: '10px', padding: '8px' }}>
            Login Here
          </h3>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Gmail"
            style={{ backgroundColor: 'black', color: 'white', border: '1px solid #28a745' }}
          />

          <input
            type="password"
            className="form-control mb-2"
            placeholder="Mot de passe"
            style={{ backgroundColor: 'black', color: 'white', border: '1px solid #28a745' }}
          />
<br/>

          <button type="submit" className="btn btn-success w-100 mb-3">
            Login
          </button>
          <a href="#">Don't have an account?</a><br />
          <h4  className="d-inline text-success"> Sign up</h4>
          <a href="#"> here</a><br/><br/><p>Log with</p>
          <div className="social-icons mt-3">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="me-4">
                    <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="me-4">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-4">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href="mailto:example@gmail.com" className="me-7">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
