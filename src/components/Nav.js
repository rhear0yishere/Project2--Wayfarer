import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, MenuItem } from 'semantic-ui-react'


 class Nav extends Component {
  
  render() {
    if(this.props.isLoggedIn){
      return (
      
        <div className='nav-container'>
           <Menu className='nav'>
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
      )
    }
    
  }
}
 
export default Nav;