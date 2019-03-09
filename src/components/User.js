import React, { Component } from 'react';
import ProfileInfo from './ProfileInfo'
import UserPostContainer from '../containers/UserPostContainer'


class User extends Component {

  state = {
    userInfo: []
  }

  // componentDidMount () {
  //   axios.get('http://localhost:3002/api/)
  // }

  render() {
    return (
      <div>
      <h1 className= "userTitle">User Profile Page</h1>
      <ProfileInfo/>
      <UserPostContainer/>
      </div>
    );
  }
}

export default User;