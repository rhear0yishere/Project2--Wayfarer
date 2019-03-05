import React, { Component } from 'react';
import TopicsContainer from '../containers/TopicsContainer'

class Landing extends Component {
  render() {
    return (
      <div > 
        <h1 className="landingTitle">I'm on the Landing</h1>
        <TopicsContainer/>
      </div>
    );
  }
}

export default Landing;