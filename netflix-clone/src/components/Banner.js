import React, { useState, useEffect } from "react";
import requests from "../requests";
import instance from "../instance";
import "./Banner.css";

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      const request = await instance.get(requests.fetchOriginals);
      let randomInt = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovies(request.data.results[randomInt]);
    }

    getData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies?.backdrop_path})`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movies?.name || movies?.title || movies?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <div className="banner_description">
          <h4>{movies?.overview}</h4>
        </div>
      </div>

      <div className="banner--fadebottom"></div>
    </header>
  );
}

export default Banner;
