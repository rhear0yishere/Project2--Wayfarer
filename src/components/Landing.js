import React, { Component } from 'react';
import About from './About';
import CityCarousel from './Carousel/Carousel'
class Landing extends Component {
  render() {
    return (
      <div className="Welcome">
        <CityCarousel/>
        <About/>
      </div>
    );
  }
}

export default Landing;