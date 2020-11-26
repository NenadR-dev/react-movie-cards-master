import React, { Component } from 'react';

import Header from './Header';
import Movies from './Movie/Movies';

export default class App extends Component {
  state = {
    title: 'React Movie Cards',
    show: false
  };

  render() {
    return (
      <div>
        <Header title={this.state.title} handleModal={this.handleShowModal}/>
        <div className="mt-5">
          <Movies show={this.state.show} handleModal={this.handleShowModal}/>
        </div>
      </div>
    );
  }

}
