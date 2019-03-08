import React, { Component } from 'react';

class NewPost extends Component {
  state = {
    message: '',
    title: ''
  };


  onFormSubmit = (event) => {
    event.preventDefault();
<<<<<<< HEAD
    let message= this.state.message;
    this.props.createTip(message)
    this.setState({
      message: '',
      city: this.state.city
    });
    console.log(this.state.city)
=======
>>>>>>> 842edd21b22e817aa3c58ab2ad1aa5e9e148e135
  }

  render() {
    return (
      <div>
        <form className="postForm"  onSubmit={ this.onFormSubmit }>
        <select name="Cities">
            <option value="None">Pick City</option>
            <option value="Seattle">Seattle</option>
            <option value="San Francisco">San Francisco</option>
            <option value="London">London</option>
        </select>
        <input
         className= "postTitle"
         value={ this.state.title }
         onChange={ this.onInputChange }
         placeholder="Post Title"
         type="text"

        />
          <textarea 
            className= "postText"
            value={ this.state.message }
            onChange={ this.onInputChange }
            placeholder="Post message"
            type="text"
          />
          <button 
            type="submit"  
            className="btn">Submit Post</button>
        </form>
      </div>
    );
  }
}

export default NewPost;
