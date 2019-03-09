import React, { Component } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Menu, Modal,Button } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import SignupPage from './SignupPage';
import 'semantic-ui-css/semantic.min.css';
import LoginPage from './LoginPage';





=======
import { Menu, Segment, MenuItem } from 'semantic-ui-react'
>>>>>>> a96c7782d5a63642b02c6fbe4be98e57e6d1ec15


 class Nav extends Component {
  
<<<<<<< HEAD
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
    
=======
  render() {
>>>>>>> a96c7782d5a63642b02c6fbe4be98e57e6d1ec15
    if(this.props.isLoggedIn){
      return (
      
        <div className='nav-container'>
<<<<<<< HEAD
           <Menu width={8} fixed='top' inverted className='nav'>
=======
           <Menu className='nav'>
>>>>>>> a96c7782d5a63642b02c6fbe4be98e57e6d1ec15
            <Menu.Item as={Link} to='/' name='Wayfarer'  onClick={this.handleItemClick} />
            
            <Menu.Menu position='right'>
              <Menu.Item as={Link} to='/User'
                name='Profile'
              //   active={activeItem === 'SignIn'}
                onClick={this.handleItemClick}
              />
               
              <Menu.Item as={Link} to='/AllPosts'
                name='Global'
              //   active={activeItem === 'SignIn'}
                onClick={this.handleItemClick}
              />
              <Menu.Item as={Link} to='/'
                name='Log Out'
              //   active={activeItem === 'SignIn'}
                onClick={this.props.loggedOut}
              />
              
            </Menu.Menu>
          </Menu> 
        </div>
      )
    }
    else{
      return (
      
        <div className='nav-container'>
           <Menu className='nav'>
            <Menu.Item as={Link} to='/' name='Wayfarer'  onClick={this.handleItemClick} />
            
            <Menu.Menu position='right'>
<<<<<<< HEAD
              <Menu.Item>
              <Modal  trigger={<Button>Sign In</Button>}>
              <Modal.Header>Select a Photo</Modal.Header>
              <Modal.Content>
              <LoginPage takeInput={this.props.takeInput} handleLogIn={this.props.handleLogIn} />
              </Modal.Content>
              </Modal>
              </Menu.Item>
                
              <Menu.Item >
              <Modal  trigger={<Button>Sign Up</Button>}>
              <Modal.Header>Select a Photo</Modal.Header>
              <Modal.Content>
                <SignupPage takeInput={this.props.takeInput} signUp={this.props.signUp}/>
              </Modal.Content>
              </Modal>
              
              </Menu.Item>
              </Menu.Menu>
            
          </Menu> 
        </div>
      
      
=======
              <Menu.Item
              //   active={activeItem === 'SignIn'}
                onClick={this.handleItemClick}
              > <Link to="/login">Sign In</Link></Menu.Item>
             
              <Menu.Item as={Link} to='/signup'
                name='Sign Up'
              //   active={activeItem === 'SignUp'}
                onClick={this.handleItemClick}
              />
              
            </Menu.Menu>
          </Menu> 
        </div>
>>>>>>> a96c7782d5a63642b02c6fbe4be98e57e6d1ec15
      )
    }
    
  }
}
 
export default Nav;