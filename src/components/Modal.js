import React, { Component } from 'react';
import '../styles/modal.css'
export class Modal extends Component{

    constructor(props){
        super(props)
        this.state={
            id: 0,
            title: "",
            subtitle: "",
            description: "",
            year: 0,
            imageUrl: "",
            rating: 0
        }
    }
    render(){
        const showHideClassName = this.props.show
        ? "modal display-block"
        : "modal display-none";
        return(
            <div className={showHideClassName}>
            <section className="modal-main">
                <form onSubmit={this.handleAdd}>
                    <label>Title: </label><input required name="title" type='text' value={this.state.title} onChange={this.handleInputChange}/>
                    <label>subtitle: </label><input required name='subtitle' type='text' value={this.state.subtitle} onChange={this.handleInputChange}/>
                    <label>description: </label><input required name="description" type='text' value={this.state.description} onChange={this.handleInputChange}/>
                    <label>Year: </label><input required name="year" type='number' value={this.state.year} onChange={this.handleInputChange}/>
                    <label>ImageUrl: </label><input required name="imageUrl" type='text' value={this.state.imageUrl} onChange={this.handleInputChange}/>
                    <button onClick={() => this.props.handleModal()}>Close</button>
                    <button type="submit">Add</button>
                </form>
            </section>
          </div>
        )
    }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleAdd = e =>{
        e.preventDefault()      
        this.props.addMovie(this.state)
    }
}