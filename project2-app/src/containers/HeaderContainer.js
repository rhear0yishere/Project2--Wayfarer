import React, { Component } from 'react';
// import Navbar from ''
import '../semantic/dist/semantic.min.css'
class HeaderContainer extends Component {
  render() {
    return (
      <div >
        <NavBar/>
        <Carousel/>
      </div>
    );
  }
};

export default HeaderContainer;
