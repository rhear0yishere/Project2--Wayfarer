import React, { Component } from 'react';
import PostContainer from '../containers/PostContainer'


class UserPostContainer extends Component {
  state ={
    showUserTips: true
  }



  render() {
    return (
      <div>
        <PostContainer showUserTips= {this.state.showUserTips}/>
      </div>
    );
  }
}

export default UserPostContainer;