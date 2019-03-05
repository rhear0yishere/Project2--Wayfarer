import React, { Component } from 'react';
import ProfileInfo from './ProfileInfo'
import UserPostContainer from '../containers/UserPostContainer'

class User extends Component {
  render() {
    return (
      <div>
      <h1>I'm on the User Profile Page</h1>
      <ProfileInfo/>
      <UserPostContainer/>
      </div>
    );
  }
}

export default User;