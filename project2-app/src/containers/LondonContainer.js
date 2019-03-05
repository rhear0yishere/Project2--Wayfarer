
import React, { Component } from 'react';
import LondonInfo from '../components/LondonInfo'
import PostContainer from './PostContainer'

class LondonContainer extends Component {
  render() {
    return (
      <div class ="mainCity">
        
          <LondonInfo/>
          <PostContainer/>
      </div>
    );
  }
}

export default LondonContainer;