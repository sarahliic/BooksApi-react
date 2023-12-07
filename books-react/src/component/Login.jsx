import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function Login() {
  const [login, setlogin] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // navigation
  const nav = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();
    // Reset errors
    setErrors({
      username: "",
      password: "",
    });

    // Validate username
    if (login.username.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Please enter a username.",
      }));
    }
    // Validate password
    if (login.password.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Please enter a password.",
      }));
    }

    // if corrcert
    if (errors.username === "" && errors.password === "") {
      // axios
      checkLogin();
    }
  };

  const findUser = localStorage.getItem("user");
  const objUser = JSON.parse(findUser);
  //   console.log(objUser);
  const checkLogin = () => {
    axios
      .get("https://6570e58909586eff66421604.mockapi.io/redister")
      .then((res) => {
        if (
          login.username === objUser.username &&
          login.password === objUser.password
        ) {
          console.log("is match and can got to the landing page");
          console.log("successful Login " + res.data);
          nav(`/BooksStore`);
        } else {
          console.log("is not");
        }
        //   nav("/Login");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-[#B99470]">Login</h1>
            <p className="py-6 text-[#B99470]">
              Hello Welcome to our Books Store!
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white max-lg:w-screen">
            <form className="card-body min-h-screen bg-white">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
                  value={login.username}
                  onChange={(e) => {
                    setlogin({
                      ...login,
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={login.password}
                  onChange={(e) => {
                    setlogin({
                      ...login,
                      password: e.target.value,
                    });
                  }}
                  required
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password}</p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handlelogin}>
                  LogIn
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
