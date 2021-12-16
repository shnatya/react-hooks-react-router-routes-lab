import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsTodisplay = directors.map(director => {
    return(
      <div key={director.name}>
        <h2>Name: {director.name}</h2>
        <h3>Movies:</h3>
        <ul>
          {director.movies.map((movie, index) => (<li key={index}>{movie}</li>))}
        </ul>
      </div>
    )
  })
  return <div>
    <h1>Directors Page</h1>
    {directorsTodisplay}
  </div>;
}

export default Directors;

// This component should render the text Directors Page in an <h1>,
// and make a new <div> for each director. The <div> should contain the
// director's name and a <ul> with a list of their movies.