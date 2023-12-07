import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../component/style.css";
import { useAppContenxt } from "./AppContext";

function Fav() {
  const { fav, addToFav, removeFromFav } = useAppContenxt();

  console.log("my fav", fav);

  //   const favChecker = (id) => {
  //     const boolean = fav.some((book) => book.id === id);
  //     return boolean;
  //   };
  return (
    <>
      <div>
        <h3>My Favorites Books</h3>
        <div className="heading">
          <h1>Favoritas Books</h1>
          <h3>-- Books -- </h3>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-11">
          {fav.length > 0 ? (
            fav.map((book) => {
              return (
                <div className="card w-64 bg-white shadow-xl">
                  <figure>
                    <img src={book.book_image} alt={book.title} width={200} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-yellow-700">
                      {book.title}!
                    </h2>
                    <div className="card-actions justify-end">
                      <button
                        className="btn  bg-[#770d15] text-white border-none"
                        onClick={() => addToFav(book)}
                      >
                        Favorit
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className="flex items-center justify-center h-60 text-red-900">
              Favorits books is empty
            </h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Fav;
