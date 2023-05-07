import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch("https://64515f17a322196911620a6f.mockapi.io/login/users/Login");
      const users = await response.json();
      const user = users.find((u) => u.username === username && u.password === password);
  
      if (user) {
        navigate("/home");
      } else {
        setError("Login yoki parol noto'g'ri!");
      }
    } catch (error) {
      console.error("Xatolik:", error);
      setError("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    }
  };

  return (
    <div className="Body1">
      <div className="container2">
        <div class="screen">
          <div class="screen-content">
            <form class="login" onSubmit={handleSubmit}>
              <div class={`login-field ${error && "error"}`}>
                <i class="login-icon fas fa-user"></i>
                <input
                  type="text"
                  class="login-input"
                  placeholder="User name / Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div class={`login-field ${error && "error"}`}>
                <i class="login-icon fas fa-lock"></i>
                <input
                  type="password"
                  class="login-input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <div class="error-message">{error}</div>}
              <button type="submit" class="button login-submit">
                <span class="button__text">Log In Now</span>
                <i class="button-icon fas fa-chevron-right"></i>
              </button>
            </form>
            <div class="social-login">
              <h3>log in CRM</h3>
              <div class="social-icons">
                <a href="#" class="social-login-icon fab fa-instagram"></a>
                <a href="#" class="social-login-icon fab fa-facebook"></a>
                <a href="#" class="social-login-icon fab fa-twitter"></a>
              </div>
            </div>
          </div>
          <div class="screen-background">
            <span class="screen-background-shape screen-background-shape4"></span>
            <span class="screen-background-shape screen-background-shape3"></span>
            <span class="screen-background-shape screen-background-shape2"></span>
            <span class="screen-background-shape screen-background-shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}