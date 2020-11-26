import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

const getMovies = (movies, deleteMovie, setRating) => (
  <div className="card-deck">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} deleteMovie={deleteMovie} setRating={setRating}/>
    ))}
  </div>
);

const MovieList = ({ movies, deleteMovie, setRating}) => <div>{getMovies(movies, deleteMovie, setRating)}</div>;

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
