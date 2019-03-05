import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import About from './About';
class Landing extends Component {
  render() {
    return (
      <div>
        <HeaderContainer/>
        <About/>
      </div>
    );
  }
}

export default Landing;