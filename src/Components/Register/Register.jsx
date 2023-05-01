import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [val1, setval1] = useState();
  const [val2, setval2] = useState();

  let navigate = useNavigate();
  const run = () => {
    if (val1 === "salom" && val2 === "12345") {
      navigate("/home");
    } else {
      alert("kalla ukam");
    }
  };
  return (
    <div className="Body1">
      <div className="container2">
      <div class="screen">
        <div class="screen-content">
          <form class="login">
            <div class="login-field">
              <i class="login-icon fas fa-user"></i>
              <input
                onInput={(val) => {
                  setval1(val.target.value);
                }}
                type="text"
                class="login-input"
                placeholder="User name / Email"
              />
            </div>
            <div class="login-field">
              <i class="login-icon fas fa-lock"></i>
              <input
                onInput={(val) => {
                  setval2(val.target.value);
                }}
                type="password"
                class="login-input"
                placeholder="Password"
              />
            </div>
            <button onClick={run} class="button login-submit">
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
