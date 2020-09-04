import React, { useState, useEffect } from "react";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./DetailsPanel.css";

function DetailsPanel({ movie }) {
  const [movieurl, setMovieUrl] = useState("");

  useEffect(() => {
    if (movieurl) {
      setMovieUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setMovieUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  }, [movie]);

  const opts = {
    height: "360",
    width: "88%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="details">
      <div className="text_details">
        <h1>{movie.name || movie.title}</h1>
        <p>{movie?.overview}</p>
        <h4>Rating: {movie.vote_average || "N/A"}</h4>
      </div>

      <div className="trailer">
        <Youtube videoId={movieurl} opts={opts} />
      </div>
    </div>
  );
}

export default DetailsPanel;
