import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import "../component/style.css";
function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const apiKey = "5q7Czhs4DZG5UZ2yLM53evyecSdNmNoF";
  const api_url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}&number=7`;

  const getBooks = () => {
    axios
      .get(api_url)
      .then((res) => {
        console.log(res);
        setPopular(res.data.results.books);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  return (
    <div>
      {/* <h3>Popular Books</h3>
      <div className="heading">
        <h1>Our Amazing Books</h1>
        <h3>-- Books -- </h3>
      </div>
      {popular.map((book) => {
        return (
          <div className="menu">
            <div className="food-items">
              <img className="img1" src={book.book_image} alt={book.title} />
              <div className="details">
                <div className="details-sub">
                  <h5>{book.title}</h5>
                  <h5 className="price">$8 </h5>
                </div>
              </div>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}

export default Popular;
