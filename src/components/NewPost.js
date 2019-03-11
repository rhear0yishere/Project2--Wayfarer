import React, { Component } from 'react';

class NewPost extends Component {
  state = {
    title: '',
    message: '',
    city: '',
    author: ''
  
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
    let title = this.state.title;
    let city= this.state.city
    let author = localStorage.title
    this.props.createTip(title,message,city,author)
    this.setState({
      title:'',
      message: '',
      city: '',
      author: ''
  
    });
  }

  render() {

    return (
      <div >
        <h1>Post A Tip</h1>
        <form className="postForm" >
        <input
         className= "postCity"
         value={ this.state.city}
         onChange={ this.changeCity }
         placeholder="City"
         type="text"

        />

        {/* <select name="Cities" >
            <option value= "None">Pick City</option>
            <option value="Seattle">Seattle</option>
            <option value="San Francisco">San Francisco</option>
            <option value="London">London</option>
        </select> */}
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
            className="submitTip" onClick= {this.onFormSubmit} >Submit</button>
        </form>
      </div>
    );
  }
}

export default NewPost;