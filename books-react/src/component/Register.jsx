import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function Register() {
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // navigation
  const nav = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Reset errors
    setErrors({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // Validate username
    if (register.username.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Please enter a username.",
      }));
    }

    // Validate email
    if (register.email.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter an email address.",
      }));
    }

    // Validate password
    if (register.password.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Please enter a password.",
      }));
    }

    // Validate confirmPassword
    if (register.confirmPassword.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Please confirm your password.",
      }));
    }

    // Validate password and confirmPassword match
    if (register.password !== register.confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Passwords do not match.",
        confirmPassword: "Passwords do not match.",
      }));
    }

    // if corrcert
    if (
      errors.username === "" &&
      errors.email === "" &&
      errors.password === "" &&
      errors.confirmPassword === ""
    ) {
      axios
        .post("https://6570e58909586eff66421604.mockapi.io/redister", {
          username: register.username,
          email: register.email,
          password: register.password,
        })
        .then((res) => {
          console.log("successful registration " + res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
          nav("/Login/:id");
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
  };

  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse min-h-screen">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-yellow-700">Register</h1>
          <p className="py-6 text-yellow-700">
            Hello Welcome to our Books Store!
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white min-h-screen max-lg:w-screen">
          <form className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input input-bordered bg-white"
                value={register.username}
                onChange={(e) => {
                  setRegister({
                    ...register,
                    username: e.target.value,
                  });
                }}
                required
              />
              {errors.username && (
                <p className="text-red-500">{errors.username}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-white"
                value={register.email}
                onChange={(e) => {
                  setRegister({
                    ...register,
                    email: e.target.value,
                  });
                }}
                required
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-white"
                value={register.password}
                onChange={(e) => {
                  setRegister({
                    ...register,
                    password: e.target.value,
                  });
                }}
                required
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered bg-white"
                value={register.confirmPassword}
                onChange={(e) => {
                  setRegister({
                    ...register,
                    confirmPassword: e.target.value,
                  });
                }}
                required
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button
                className="btn  bg-[#770d15] text-white"
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
