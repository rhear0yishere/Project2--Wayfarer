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
            <Menu.Item className= "navBackground" as={Link} to='/AllPosts'
                  name='All Tips'
              //   active={activeItem === 'SignIn'}
                onClick={this.handleItemClick}
              />
              <Menu.Item  as={Link} to='/User'
              className= "navBackground"
                name='Profile'
              //   active={activeItem === 'SignIn'}
                onClick={this.handleItemClick}
              />
               
              <Menu.Item clas={Link} to='/'
              className= "navBackground"
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
           <Menu>
            <Menu.Item as={Link} to='/' name='Wayfarer'  onClick={this.handleItemClick} />
            
            <Menu.Menu position='right'>
            <Menu.Item className= "navBackground" as={Link} to='/AllPosts'
                  name='All Tips'
              //   active={activeItem === 'SignIn'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
              className= "navBackground"
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