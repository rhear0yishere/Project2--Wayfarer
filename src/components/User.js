import React, { Component } from 'react';
import UserPostContainer from '../containers/UserPostContainer'

class User extends Component {


  render() {
    console.log(localStorage.title, "LOCAL")
    return (
      <div>
      <h1 className= "userTitle">Welcome {localStorage.title}</h1>
      <UserPostContainer/>
      </div>
    );
  }
}

export default User;