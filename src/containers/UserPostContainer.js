import React, { Component } from 'react';
import PostContainer from '../containers/PostContainer'


class UserPostContainer extends Component {
  state ={
    showUserTips: true
  }

  render() {
    return (
      <div>
        {this.state.showUserTips ? <h1 className= "userTitle">Welcome {localStorage.title}</h1> : ''}

        <PostContainer showUserTips= {this.state.showUserTips}/>
      </div>
    );
  }
}

export default UserPostContainer;