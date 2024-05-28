import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5001/login', {
        email,
        password
      });
      if (response.status === 200) {
        if (response.data.message === "Login successful") {
          history.push('/');
        } else if (response.data.message === "Invalid email or password") {
          alert("Invalid email or password. Please check your email and password.");
        } else {
          alert("An error occurred while logging in.");
        }
      } else {
        alert("An error occurred while logging in. Please check your network connection.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/Signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
          Register here
        </Link>
      </p>
    </div>
  );
}
export default LoginPage;