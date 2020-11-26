import React, { Component } from 'react';
import '../styles/modal.css'

var validated = true  

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
                    <label>Title: </label><input id="title" name="title" type='text' onFocus={this.validateField}  onInputCapture={this.validateField} value={this.state.title} onChange={this.handleInputChange}/>
                    <label>subtitle: </label><input id='subtitle'  name='subtitle' type='text' onFocus={this.validateField}  onInputCapture={this.validateField} value={this.state.subtitle} onChange={this.handleInputChange}/>
                    <label>description: </label><input id='description'  name="description" type='text' onFocus={this.validateField}  onInputCapture={this.validateField} value={this.state.description} onChange={this.handleInputChange}/>
                    <label>Year: </label><input id='year'  name="year" type='number' onFocus={this.validateField}  onInputCapture={this.validateField} value={this.state.year} onChange={this.handleInputChange}/>
                    <label>ImageUrl: </label><input id="imageUrl" name="imageUrl" type='text' onFocus={this.validateField}  onInputCapture={this.validateField} value={this.state.imageUrl} onChange={this.handleInputChange}/>
                    <button onClick={() => this.props.handleModal()}>Close</button>
                    <button type="submit" disabled={!validated}>Add</button>
                </form>
            </section>
          </div>
        )
    }

    validateField = (e) => {
        if(e.target.value === ''){
            validated = false
            e.target.style.borderColor= "red"
        }
        else{
            validated = true
            e.target.style.borderColor = 'grey'
        }
    }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleAdd = e =>{
        e.preventDefault()
        if(this.state.description !== '' && this.state.imageUrl !== '' && this.state.subtitle !== '' && this.state.title !== ''
            && this.state.year !== ''){
                this.props.addMovie(this.state)
        }
        else{
            if(this.state.year === '' || this.state.year === 0){
                document.getElementById('year').style.borderColor = 'red'
                validated = false
            }else{
                document.getElementById('year').style.borderColor = 'grey'
                validated = true
            }
            if(this.state.description === ''){
                document.getElementById('description').style.borderColor = 'red'
                validated = false
            }else{
                document.getElementById('description').style.borderColor = 'grey'
                validated = true
            }
            if(this.state.subtitle === ''){
                document.getElementById('subtitle').style.borderColor = 'red'
                validated = false
            }else{
                document.getElementById('subtitle').style.borderColor = 'grey'
                validated = true
            }
            if(this.state.title === ''){
                document.getElementById('title').style.borderColor = 'red'
                validated = false
            }else{
                document.getElementById('title').style.borderColor = 'grey'
                validated = true
            }
            if(this.state.imageUrl === ''){
                document.getElementById('imageUrl').style.borderColor = 'red'
                validated = false
            }else{
                document.getElementById('imageUrl').style.borderColor = 'grey'
                validated = true
            }
        }
        
    }
}