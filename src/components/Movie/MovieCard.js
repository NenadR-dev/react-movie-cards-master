import React, {useState} from 'react';
import PropTypes, { number } from 'prop-types';

import StarRating from '../StarRating';


const MovieCard = ({ movie, deleteMovie, setRating}) => {

  const [onHover, setOnHover] = useState(false)
  const [numOfUsers, setNumOfUsers] = useState(1)

  const handleStarRating = (stars) => {
    setNumOfUsers(numOfUsers + 1)
    setRating(movie.id, stars)
  }
  
  return (
    <div className="movie-card">
    <div className="movie-card card">
      <img className="card-img-top" src={movie.imageUrl} alt="" />
      <div className="card-body">
        <h4 className="card-title">{movie.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
        <p className="text-justify" style={{ fontSize: '14px' }}>
          {movie.description}
        </p>
        <button onClick={() => deleteMovie(movie.id)}>Delete</button>
      </div>
      <div className="card-footer">
        <div className="clearfix">
          <div className="float-left mt-1">
            <StarRating rating={movie.rating} setRating={stars => handleStarRating(stars)}/>
          </div>
          <div className="card-footer-badge float-right badge badge-primary badge-pill" onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}>{movie.rating}</div>
        </div>
          {onHover ? <div style={{position: "absolute", marginLeft: "150px", marginTop: "-50px"}}>
            <label>{numOfUsers} users rated</label>
            </div> : ''}
      </div>
    </div>
  </div>
  )
};

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  rating: number
};

export default MovieCard;
