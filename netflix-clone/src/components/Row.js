import React, { useState, useEffect } from "react";
import instance from "../instance";
import "./Row.css";
import DetailsPanel from "./DetailsPanel";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);
  const [selection, setSelecetion] = useState();

  const baseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function getData() {
      const request = await instance.get(fetchURL);
      setMovies(request.data.results);
    }

    getData();
  }, [fetchURL]);

  const handleClick = (movie) => {
    if (selection === "") {
      setSelecetion(movie);
    } else {
      setSelecetion("");
    }
    console.log(movie);
  };

  return (
    <div className="row">
      <h2 style={{ color: "white" }}>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row_poster"
            onClick={() => handleClick(movie)}
            src={`${baseURL}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {selection && <DetailsPanel movie={selection} />}
    </div>
  );
}

export default Row;
