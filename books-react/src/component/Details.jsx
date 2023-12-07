import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../component/style.css";
import axios from "axios";

function Details() {
  const [book, setBook] = useState({});
  const { id } = useParams();

  // api
  useEffect(() => {
    getBooks();
  }, []);

  const apiKey = "5q7Czhs4DZG5UZ2yLM53evyecSdNmNoF";
  const api_url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}&number=7`;

  const getBooks = () => {
    axios
      .get(api_url)
      .then((res) => {
        console.log(res.data.results.books);
        setBook(res.data.results.books.find((item) => item.rank == id));

        // const book = res.data.results.books.find((item) => item.rank == id);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  return (
    <>
      <div className="bg-white">
        <h3>More Details about Books</h3>
        <div className="heading">
          <h1>Details Books</h1>
          <h3>-- Books -- </h3>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-11">
          <div className="card lg:card-side bg-white w-96 min-h-[100%] shadow-xl">
            <figure>
              <img
                src={book?.book_image}
                alt={book?.title}
                width={700}
                className="w-96 h-40"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{book?.titel}</h2>
              <p>{book?.description}</p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Listen</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
