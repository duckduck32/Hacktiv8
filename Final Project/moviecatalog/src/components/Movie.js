// src/Movie.js
import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div className='movie'>
      <img src={movie.Poster} alt='movie'></img>
      <div>
        <h2>{movie.Title}</h2>
      </div>
    </div>
  );
}

export default Movie;
