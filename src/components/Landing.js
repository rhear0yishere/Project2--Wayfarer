import React, { Component } from 'react';
import About from './About';
// import Backgroundmovie from './Backgroundmovie/Backgroundmovie'
import CityCarousel from './Carousel/Carousel'
class Landing extends Component {
  render() {
    return (
      <div className="Welcome">
        <h1 className="Welcome">Welcome To Wayfarer</h1>
        <CityCarousel/>
        <About/>
      </div>
    );
  }
}

export default Landing;