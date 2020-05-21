import React from "react";


const Movie = props => {
  const n = props.rating; // Or something else

const rating = [...Array(n)].map((e, i) => <span className="star"></span>)
  return (
    <div className="movie">
      
      <div>
        <img width="200" alt={props.title} src={props.poster} />
        <h2>{props.title} ({props.year})</h2>
      </div>
      <p className="rating">{rating}</p>
    </div>
  );
};


export default Movie;