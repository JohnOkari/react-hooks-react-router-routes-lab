import React from "react";
import { actors } from "../data";
// const listOfActors = actors.map((actor)=>{

// })
function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <div>
          <h2>{actor.name}</h2>
          <ul>{actor.movies}</ul>
        </div>
      ))}
    </div>
  );
}

export default Actors;
