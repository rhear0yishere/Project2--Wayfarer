import React, { Component } from 'react';
import SFCityContainer from '../containers/SFCityContainer'

class AllPosts extends Component {
  state ={
    LoggedIn: this.props.LoggedIn
  }
  render() {
    console.log(this.state.LoggedIn, "LOOK")
    return (
      <div>
      <SFCityContainer LoggedIn= {this.state.LoggedIn} />
      </div>
    );
  }
}

export default AllPosts;