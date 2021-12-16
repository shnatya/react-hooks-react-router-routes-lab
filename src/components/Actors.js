import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsToDisplay = actors.map(actor => {
    return (
      <div key={actor.name}>
        <h2>Name: {actor.name}</h2>
        <ul>
            {actor.movies.map((movie, index) => (<li key={index}>{movie}</li>))}
        </ul>
      </div>
    )
  })
  return <div>
    <h1>Actors Page</h1>
    {actorsToDisplay}
  </div>;
}

export default Actors;

