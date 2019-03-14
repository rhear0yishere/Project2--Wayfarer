import React, { Component } from 'react';
import { Modal,Button,Form } from 'semantic-ui-react'

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
        <Modal trigger = {<Button className="tipModal">Add New Tip</Button>}>
          <Modal.Content >
              <h1>Add A Tip</h1>
            <Form className = "postForm" >
                  <input
                    className = "postCity"
                    value = { this.state.city}
                    onChange = { this.changeCity }
                    placeholder = "City"
                    type = "text"

                  />
                  <input
                    className = "postTitle"
                    value = { this.state.title }
                    onChange = { this.onInputChangeTitle }
                    placeholder = "Post Title"
                    type = "text"

                  />
                    <textarea 
                      className = "postText"
                      value = { this.state.message }
                      onChange = { this.onInputChangeMesssage }
                      placeholder = "Post message"
                      type = "text"
                    />
                    <Button
                      type = "submit"  
                      className = "submitTip" onClick = {this.onFormSubmit} >Submit Tip </Button>
            </Form>
        </Modal.Content>
      </Modal>
       
      </div>
    );
  }
}

export default NewPost;