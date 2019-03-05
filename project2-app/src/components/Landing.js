import React, { Component } from 'react';
import TopicsContainer from '../containers/TopicsContainer'

class Landing extends Component {
  render() {
    return (
      <div>
        <h1>I'm on the Landing</h1>
        <TopicsContainer/>
      </div>
    );
  }
}

export default Landing;