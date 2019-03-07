import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react'




// class Nav extends Component {
//   render() {
//     return (
//      <nav>
//          <ul>
//             <li><Link to={'/'}>Home</Link></li>
//             <li><Link to={'/User'}>User Profile</Link></li>
//             <li><Link to={'/AllPosts'}>All Posts</Link></li>
//             <li><Link to={'/Login'}>Login</Link></li>
//             <li><Link to={'/Signup'}>Signup</Link></li>


//          </ul>
//      </nav>
//     );
//   }
// }




 class Nav extends Component {
  
  render() {
    

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
            
            <Menu.Item as={Link} to='/Login'
              name='Sign In'
            //   active={activeItem === 'SignIn'}
              onClick={this.handleItemClick}
            />
           
            <Menu.Item as={Link} to='/Signup'
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
 
export default Nav;