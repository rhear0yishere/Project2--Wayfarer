import React, { Component } from 'react';
import { Menu, Modal,Button } from 'semantic-ui-react'


class NewPost extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    
  }
  

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
              <Modal   trigger={<Button className= "navBackground">Post A Tip</Button>}>
              <Modal.Header></Modal.Header>
              <Modal.Content>
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
            className="submitTip" onClick= {this.onFormSubmit} >Submit Post </button>
        </form>
              
              </Modal.Content>
              </Modal>

      </div>
    );
  }
}

export default NewPost;