import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import "../component/style.css";
import { useAppContenxt } from "./AppContext";
function BooksStore() {
  const [popular, setPopular] = useState([]);

  const { fav, addToFav, removeomFav } = useAppContenxt();
  const nav = useNavigate();
  console.log("my fav", fav);

  //   const favChecker = (id) => {
  //     const boolean = fav.some((book) => book.id === id);
  //     return boolean;
  //   };

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
    <>
      <div>
        <h3>Popular Books</h3>
        <div className="navbar" id="navLinks">
          <ul className="text-yellow-700">
            <Link to="/Fav">
              <li>Favorurit</li>
            </Link>
            <Link to="/Read">
              <li>Read</li>
            </Link>
          </ul>
        </div>
        <div className="heading">
          <h1>Our Amazing Books</h1>
          <h3>-- Books -- </h3>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-11">
          {popular.map((book) => {
            return (
              <div className="card w-64 h-full bg-white shadow-xl">
                <figure>
                  <img
                    src={book.book_image}
                    alt={book.title}
                    onClick={() => {
                      nav(`/Details/${book.rank}`);
                    }}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-yellow-700">{book.title}!</h2>
                  <div className="card-actions justify-end">
                    <button
                      className="btn  bg-[#770d15] text-white border-none"
                      onClick={() => addToFav(book)}
                    >
                      Favorit
                    </button>
                    <button
                      className="btn  bg-[#770d15] text-white border-none"
                      onClick={() => addToFav(book)}
                    >
                      Read
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BooksStore;
