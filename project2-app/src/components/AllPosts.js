import React, { Component } from 'react';
import CitiesContainer from '../containers/CitiesContainer'
import SFCityContainer from '../containers/SFCityContainer'
class AllPosts extends Component {
  render() {
    return (
      <div>
      <CitiesContainer/>
      <SFCityContainer/>
      </div>
    );
  }
}

export default AllPosts;