import React, { Component } from 'react';
import TipModel from '../models/tips';

class NewPost extends Component {
  state = {
    message: '',
    city: ''
   
  
  };

  onInputChangeMesssage = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  onInputChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }
  changeCity = (event) => {
     this.setState({
       city: event.target.value
      });

  }
  
  onFormSubmit = (event) => {
    event.preventDefault();
    let message= this.state.message;
    this.props.createTip(message)
    this.setState({
      message: '',
      city: this.state.city
    });
    console.log(this.state.city)
  }

  render() {

    return (
      <div>
        <label>New Post</label>
        <form className="postForm"  onChange={ this.changeCity }>
        <select name="Cities" >
            <option value= "None">Pick City</option>
            <option value="Seattle">Seattle</option>
            <option value="San Francisco">San Francisco</option>
            <option value="London">London</option>
        </select>
        <input
         className= "postTitle"
         value={ this.state.title }
         onChange={ this.onInputChangeTitle }
         placeholder="Post Title"
         type="text"

        />
          <textarea 
            className= "postText"
            value={ this.state.message }
            onChange={ this.onInputChangeMesssage }
            placeholder="Post message"
            type="text"
          />
          <button 
            type="submit"  
            className="btn" onClick= {this.onFormSubmit} >Submit Post </button>
        </form>
      </div>
    );
  }
}

export default NewPost;
