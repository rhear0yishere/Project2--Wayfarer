import React, { Component } from 'react';
import CitiesContainer from '../containers/CitiesContainer'
import CityListContainer from '../containers/CityListContainer'
import MainCityContainer from '../containers/MainCityContainer'
class AllPosts extends Component {
  render() {
    return (
      <div>
      <CitiesContainer/>
      <CityListContainer/>
      <MainCityContainer/>
      </div>
    );
  }
}

export default AllPosts;