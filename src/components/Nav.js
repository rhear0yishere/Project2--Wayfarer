import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Modal,Button } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import SignupPage from './SignupPage';
import 'semantic-ui-css/semantic.min.css';
import LoginPage from './LoginPage';
import '../index.css'

 class Nav extends Component {
  
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
  
  render() {
    
    if(this.props.isLoggedIn){
      return (
      
        <div className = 'nav-container'>
           <Menu className = 'nav'  fixed = 'top' >
            <Menu.Item  as={Link} to='/' name = 'Wayfarer'  onClick={this.handleItemClick} />
            
            <Menu.Menu position = 'right'>
            <Menu.Item className = "navBackground" as = {Link} to = '/AllPosts'
                name = 'All Tips'
                onClick={this.handleItemClick}
              />
              <Menu.Item className= "navBackground" as={Link} to='/User'
                name='Profile'
                onClick={this.handleItemClick}
              />
    
              <Menu.Item className= "navBackground" as={Link} to='/'
                name='Log Out'
                onClick={this.props.loggedOut}
              />
              
            </Menu.Menu>
          </Menu> 
        </div>
      )
    }
    else{
      return (
      
        <div className = 'nav-container'>
           <Menu className = 'nav'  fixed = 'top' >
              <Menu.Item className= "navBackground" as={Link} to='/' name='Wayfarer'  onClick={this.handleItemClick} />
              
              <Menu.Menu position = 'right'>

                <Menu.Item className = "navBackground" as = {Link} to = '/AllPosts'
                      name = 'All Tips'
                      onClick = {this.handleItemClick}
                    />
                <Menu.Item className = "navBackground">  
                  <Modal trigger = {<Button className = "navBackground">Sign In</Button>}>
                  <Modal.Header></Modal.Header>
                  <Modal.Content>
                  <LoginPage takeInput = {this.props.takeInput} handleLogIn = {this.props.handleLogIn} />
                  </Modal.Content>
                  </Modal>
                </Menu.Item>
                    
                <Menu.Item className = "navBackground" >
                  <Modal  trigger = {<Button className = "navBackground">Sign Up</Button>}>
                  <Modal.Header></Modal.Header>
                  <Modal.Content>
                    <SignupPage takeInput = {this.props.takeInput} signUp = {this.props.signUp}/>
                  </Modal.Content>
                  </Modal>
                </Menu.Item>
              </Menu.Menu>
              
          </Menu> 
        </div>
      
      
      )
    }
    
  }
}
 
export default Nav;