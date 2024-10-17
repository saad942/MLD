import React, { useState } from 'react';
import axios from 'axios';

import './Home.css'; // Your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Home() {
  const [email, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [signup, setSignup] = useState(false);
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/user/login', {
        email,
        password,
      });

      // Consider adding a success response check before redirecting
      if (response.data.status === 'success') {
        window.location.href = '/clien';
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/user/register', {
        username,
        email,
        password,
      });
      if (response.data.status === 'success') {
        window.location.href = '/';
      } else {
        setError('Something went wrong');
      }
    } catch (error) {
      setError('An error occurred');
    }
  };

  return (
    <div className="cont">
      <div className="row align-items-center">
        <div className="col-md-8 Home">
          <h1 style={{ fontSize: '80px' }}>
            Securité &<span style={{ color: '#28a745' }}> Nettoyage</span>
          </h1>
          <p>
            Safety and cleanliness, supported by protocols and security measures,
            <br />
            ensure a secure and protected environment.
          </p>
          <button className="btn btn-success">Join us</button>
        </div>

        <div className="col-md-4 log" style={{ textAlign: 'center', padding: '20px' }}>
          <h3 className="text-success" style={{ backgroundColor: 'white', borderRadius: '10px', padding: '8px' }}>
            {signup ? 'Sign up' : 'Login Here'}
          </h3>
          {signup && (
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="form-control mb-2"
              placeholder="Username"
              style={{ backgroundColor: 'black', color: 'white', border: '1px solid #28a745' }}
            />
          )}
          <input
            value={email}
            onChange={(e) => setGmail(e.target.value)}
            type="email" // Changed to 'email' for better validation
            className="form-control mb-2"
            placeholder="Gmail"
            style={{ backgroundColor: 'black', color: 'white', border: '1px solid #28a745' }}
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control mb-2"
            placeholder="Mot de passe"
            style={{ backgroundColor: 'black', color: 'white', border: '1px solid #28a745' }}
          />
          <br />

          <button type="submit" className="btn btn-success w-100 mb-3" onClick={!signup ? handleSubmit : handleSignup}>
            {!signup ? 'Login' : 'Sign up'}
          </button>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          {!signup ? (
            <>
              <a href="#" onClick={() => setSignup(true)}>Don't have an account?</a>
              <br />
              <h4 className="d-inline text-success"> Sign up</h4>
              <a href="#" onClick={() => setSignup(true)}> here</a>
            </>
          ) : (
            <>
              <a href="#" onClick={() => setSignup(false)}>Already have an account?</a>
              <br />
              <h4 className="d-inline text-success"> Log in</h4>
              <a href="#" onClick={() => setSignup(false)}> here</a>
            </>
          )}

          <br />
          <p>Log in with</p>

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
