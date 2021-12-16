import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">
    <NavLink  exact to="/">Home</NavLink>
    <NavLink exact to="/movies">Movies</NavLink>
    <NavLink exact to="/directors">Directors</NavLink>
    <NavLink exact to="/actors">Actors</NavLink>
  </div>;
}

export default NavBar;

/* return <div className="navbar">
    <NavLink  exact to="/"><li>Home</li></NavLink>
    <NavLink exact to="/movies"><li>Movies</li></NavLink>
    <NavLink exact to="/directors"><li>Directors</li></NavLink>
    <NavLink exact to="/actors"><li>Actors</li></NavLink>
  </div>;*/