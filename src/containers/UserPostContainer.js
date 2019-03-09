import React, { Component } from 'react';
import UserPosts from '../components/UserPosts'
import PostContainer from '../containers/PostContainer'


class UserPostContainer extends Component {


  render() {
    return (
      <div>
        <PostContainer/>
      </div>
    );
  }
}

export default UserPostContainer;