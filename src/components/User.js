import React, { Component } from 'react';
import UserPostContainer from '../containers/UserPostContainer'


class User extends Component {


  render() {
    return (
      <div>
        {this.props.LoggedIn ? <UserPostContainer/> : ''}
      </div>
    );
  }
}

export default User;