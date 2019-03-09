import React, { Component } from 'react';
import SFCityContainer from '../containers/SFCityContainer'
import { Link } from 'react-router-dom';

class AllPosts extends Component {
  render() {
    return (
      <div>
      <li><Link to={'/NewPost'}>New Post</Link></li>
      <SFCityContainer />
      </div>
    );
  }
}

export default AllPosts;