import React, { Component } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import { Modal } from '../Modal';

export default class Movies extends Component {
  state = {
    movies: [],
    show: false,
    stars: []
  };

  componentDidMount() {
    this.setState(() => ({
      movies: MovieService.getMovies(),
    }));
    var temp = []
    var iterate = MovieService.getMovies()
    for(var i = 0; i < iterate.length; i++){
      temp.push({
        id: iterate[i].id,
        rating: [iterate[i].rating]
      })
    }
    this.setState(() => ({stars: temp}))
  }

  render() {
    return (
      <div className="container-fluid" style={{ marginLeft: '-15px' }}>       
        <div className="d-flex flex-row">
        <button onClick={this.handleShowModal}>Add Movie</button>
          <div className="col-sm-12">
            <MovieList movies={this.state.movies} deleteMovie={this.deleteMovie}
             setRating={this.setMovieRating}/>
            {this.state.show ? <Modal show={this.state.show} handleModal={this.handleShowModal} addMovie={this.addNewMovie}/> : <div></div>}
          </div>
        </div>
      </div>
    );
  }


  setMovieRating = (id,rating) =>{
    var temp = [...this.state.movies]
    var starTemp = [...this.state.stars]
    for(var i = 0; i < starTemp.length; i++){
      if(starTemp[i].id === id){
        starTemp[i].rating.push(rating)
        temp[i].rating = Number((starTemp[i].rating.reduce((a,b) => a+b) / starTemp[i].rating.length).toFixed(2))
        break;
      }
    }
    this.setState({movies: temp})
    this.setState({stars: starTemp})
  }

  deleteMovie = id => {
    var temp = [...this.state.movies]
    var starsTemp = [...this.state.stars]
    var target = temp.find(x=> x.id === id)
    var starTarget = starsTemp.find(x=> x.id === id)
    temp.splice(temp.indexOf(target),1)
    starsTemp.splice(starsTemp.indexOf(starTarget),1)
    this.setState({movies: temp})
    this.setState({stars: starsTemp})
  }

  addNewMovie = data => {
    this.handleShowModal()
    var newMovie = data
    newMovie.id = (this.state.movies.length + 1) * 100
    var temp = [...this.state.movies]
    var starsTemp = [...this.state.stars]
    temp.push(newMovie)
    starsTemp.push({
      id: newMovie.id,
      rating: [newMovie.rating]
    })
    this.setState({movies: temp}) 
    this.setState({stars: starsTemp}) 
  }

  handleShowModal = () => {
    this.setState({show: !this.state.show})
  }
}
