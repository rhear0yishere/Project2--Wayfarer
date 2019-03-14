import React, { Component } from 'react';
import UserPostContainer from '../containers/UserPostContainer'


class User extends Component {


  render() {
    console.log(localStorage.title, "LOCAL")
    return (
      <div>
        {this.props.LoggedIn ? <UserPostContainer/> : ''}

      
      </div>
    );
  }
}

export default User;