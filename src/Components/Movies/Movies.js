import React, { useEffect, useState, useContext } from "react";
import Movie from "./Movie";
import { AppContext } from "../../Context/SearchContext";
import './Movies.css';

const API_KEY = "67353b44";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]); // Default series to "which you want to show in the main page"
  const [currentPage, setCurrentPage] = useState(0);
  const moviesPerPage = 5; // Number of movies per page
  const { state, setState, isLoading, setIsLoading } = useContext(AppContext);

  useEffect(() => {
    setSeries(state.length > 0 ? state : ['Stree 2']); // Use default if state is empty
    const promises = series.map(s => {
      setIsLoading(true);
      return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${s}`)
        .then(res => {
          setIsLoading(false);
          return res.json();
        });
    });

    Promise.all(promises).then(movieData => {
      setMovies(movieData.flatMap(currentMovie => currentMovie.Search || []));
    }).catch(error => {
      console.error("Error fetching movies:", error);
    });

  }, [state, series]);

  const handleNext = () => {
    if ((currentPage + 1) * moviesPerPage < movies.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedMovies = movies.slice(currentPage * moviesPerPage, (currentPage + 1) * moviesPerPage);

  return (
    <div className="movie-container">
      {isLoading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        <>
          <div className="movie-list">
            {displayedMovies.length > 0 ? (
              displayedMovies.map((movie, index) => (
                movie ? (
                  <Movie
                    key={movie.imdbID}
                    movie={movie}
                    className={`movie-card animation-delay-${index}`}
                  />
                ) : null
              ))
            ) : (
              <div>No movies found</div>
            )}
          </div>
          <div className="navigation-buttons">
            <button className="nav-button" onClick={handlePrevious} disabled={currentPage === 0}>
              Previous
            </button>
            <button className="nav-button" onClick={handleNext} disabled={(currentPage + 1) * moviesPerPage >= movies.length}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
