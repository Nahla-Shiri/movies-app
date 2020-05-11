import React from "react";


const Movie = props => {
  
  return (
    <div className="movie">
      
      <div>
        <img width="200" alt={props.title} src={props.poster} />
        <h2>{props.title} ({props.year})</h2>
      </div>
      <p className="rating">{props.rating}  <span className="star"></span></p>
    </div>
  );
};


export default Movie;