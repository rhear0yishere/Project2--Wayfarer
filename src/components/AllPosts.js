import React, { Component } from 'react';
import CityContainer from '../containers/CityContainer'

class AllPosts extends Component {
  state ={
    LoggedIn: this.props.LoggedIn
  }
  render() {
    return (
      <div>
          <CityContainer LoggedIn= {this.state.LoggedIn} />
      </div>
    );
  }
}

export default AllPosts;