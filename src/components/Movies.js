import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesToDispaly = movies.map(movie => {
    return(<div key={movie.title}>
      <h1>Name: {movie.title}</h1>
      <h3>Time: {movie.time}</h3>
      <ul>
        {movie.genres.map((genre, index) => (<li key={index}>{genre}</li>))}
      </ul>
    </div>)
  })
  return <div>
    <h1>Movies Page</h1>

    {moviesToDispaly}
  </div>;
}

export default Movies;
