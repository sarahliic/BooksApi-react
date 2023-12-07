import React, { useEffect } from "react";
import axios from "axios";
import "../component/style.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  // const apiKey = "5q7Czhs4DZG5UZ2yLM53evyecSdNmNoF"
  // const api_url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`;

  // const usersApi = "https://6570b5a109586eff6641d63e.mockapi.io/users"
  // useEffect(()=>{
  //     axios.get(api_url)
  //     .then(function (response) {
  //     // handle success
  //     console.log(response);
  //     })
  //     .catch(function (error) {
  //     // handle error
  //     console.log("there is error: " +error);
  //     })
  // },[])
  return (
    <>
      <div>
        <section className="contanier">
          <div className="navbar" id="navLinks">
            <ul>
              <Link to="/">
                <li>Siginout</li>
              </Link>
            </ul>
          </div>
          <div className="row">
            <div className="col" data-aos="fade-up" data-aos-duration="1000">
              <h1>
                Reading Books will make <br />
                your life better
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur elit. Nam aliquam
                expedita <br />
                perspiciatis delectus odit sapiente in labore.
              </p>
              {/* <button type="button" className="hero-btn">
                Explore
              </button> */}
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="1000">
              <div className="card card1" id="card1">
                <h5>.</h5>
              </div>
              <div className="card card2" id="card2">
                <h5>.</h5>
              </div>
              <div className="card card3" id="card3">
                <h5>.</h5>
              </div>
              <div className="card card4" id="card4">
                <h5>.</h5>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
