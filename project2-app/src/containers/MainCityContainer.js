import React, { Component } from 'react';
import MainCityInfo from '../components/MainCityInfo'
import PostContainer from '../containers/PostContainer'
class MainCityContainer extends Component {
  render() {
    return (
      <div>
          <MainCityInfo/>
          <PostContainer/>
      </div>
    );
  }
}

export default MainCityContainer;