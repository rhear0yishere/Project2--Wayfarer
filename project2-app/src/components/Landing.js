import React, { Component } from 'react';
import About from './About';
// import Backgroundmovie from './Backgroundmovie/Backgroundmovie'
import CityCarousel from './Carousel/Carousel'
class Landing extends Component {
  render() {
    return (
      <div>
        <CityCarousel/>
        <About/>
      </div>
    );
  }
}

export default Landing;