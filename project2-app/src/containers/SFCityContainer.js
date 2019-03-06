
import React, { Component } from 'react';
import SFCityInfo from '../components/SFCityInfo'
import PostContainer from './PostContainer'

class SFCityContainer extends Component {
  render() {
    return (
      <div className ="mainCity">
          <SFCityInfo/>
          <PostContainer/>
      </div>
    );
  }
}

export default SFCityContainer;