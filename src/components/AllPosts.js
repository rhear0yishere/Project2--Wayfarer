import React, { Component } from 'react';
import SFCityContainer from '../containers/SFCityContainer'

class AllPosts extends Component {
  state ={
    LoggedIn: this.props.LoggedIn
  }
  render() {
    return (
      <div>
      <SFCityContainer LoggedIn= {this.state.LoggedIn} />
      </div>
    );
  }
}

export default AllPosts;