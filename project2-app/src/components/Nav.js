import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Nav extends Component {
  render() {
    return (
     <nav>
         <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/User'}>User Profile</Link></li>
            <li><Link to={'/AllPosts'}>All Posts</Link></li>
            <li><Link to={'/Login'}>Login</Link></li>
            <li><Link to={'/Signup'}>Signup</Link></li>


         </ul>
     </nav>
    );
  }
}

export default Nav;