import React, {useState} from 'react';
import PropTypes from 'prop-types';

import StarRating from '../StarRating';


const MovieCard = ({ movie, deleteMovie, setRating}) => {

  const [onHover, setOnHover] = useState(false)
  
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
            <StarRating rating={movie.rating} setRating={stars => setRating(movie.id, stars)}/>
          </div>
          <div className="card-footer-badge float-right badge badge-primary badge-pill" onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}>{movie.rating}</div>
        </div>
        {onHover ? <div style={{position: "absolute", marginLeft: "150px", marginTop: "-50px"}}><label>{Math.floor(Math.random() * 10 + 1)} users rated</label></div> : ''}
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
};

export default MovieCard;
