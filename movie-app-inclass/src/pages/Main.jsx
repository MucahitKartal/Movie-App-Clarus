import React from "react";
import { useMovieContext } from "../context/MovieContext";

const Main = () => {
  const { movies, loading } = useMovieContext();
  return (
    <div>
      <div>
        {movies.map((movie) => (
          <p>{movie.id}</p>
        ))}
      </div>
    </div>
  );
};

export default Main;
