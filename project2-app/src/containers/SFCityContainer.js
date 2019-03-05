
import React, { Component } from 'react';
import SFCityInfo from '../components/SFCityInfo'
import PostContainer from './PostContainer'
import CitiesList from '../components/CitiesList'

class SFCityContainer extends Component {
  render() {
    return (
      <div class ="mainCity">
          <SFCityInfo/>
          <PostContainer/>
      </div>
    );
  }
}

export default SFCityContainer;