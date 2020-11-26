import React, { Component } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import { Modal } from '../Modal';

export default class Movies extends Component {
  state = {
    movies: [],
    show: false
  };

  componentDidMount() {
    this.setState(() => ({
      movies: MovieService.getMovies(),
    }));
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
    console.log(id + " " + rating)
    var temp = [...this.state.movies]
    for(var i = 0; i < temp.length; i++){
      if(temp[i].id === id){
        temp[i].rating = rating;
        break;
      }
    }
    this.setState({movies: temp})
  }

  deleteMovie = id => {
    var temp = [...this.state.movies]
    var target = temp.find(x=> x.id === id)
    temp.splice(temp.indexOf(target),1)
    this.setState({movies: temp})
  }

  addNewMovie = data => {
    this.handleShowModal()
    var newMovie = data
    newMovie.id = (this.state.movies.length + 1) * 100
    var temp = [...this.state.movies]
    temp.push(newMovie)
    this.setState({movies: temp}) 
  }

  handleShowModal = () => {
    this.setState({show: !this.state.show})
  }
}
