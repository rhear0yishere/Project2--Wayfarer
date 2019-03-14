import React, { Component } from 'react';
import PostContainer from '../containers/PostContainer'
import { Icon } from 'semantic-ui-react'



class UserPostContainer extends Component {
  state = {
    showUserTips: true
  }



  render() {
    return (
      <div className = "userIcon">
      <Icon circular color = 'teal' name = 'user' />
      {this.state.showUserTips ? <h1 className = "userTitle">Welcome {localStorage.title}</h1> : ''}
        <PostContainer showUserTips = {this.state.showUserTips}/>
      </div>
    );
  }
}

export default UserPostContainer;