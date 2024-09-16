import React from "react";
import './Movie.css';

export default function Movie(props) {
  return (
    <div className="movie-card">
      <img src={props.movie.Poster} alt={props.movie.Title} className="movie-poster" />
      <div className="movie-info">
        <h2 className="movie-title">{props.movie.Title}</h2>
        <h3 className="movie-year">{props.movie.Year}</h3>
      </div>
    </div>
  );
}
