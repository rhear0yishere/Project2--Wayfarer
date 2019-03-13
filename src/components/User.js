import React, { Component } from 'react';
import UserPostContainer from '../containers/UserPostContainer'


class User extends Component {


  render() {
    console.log(this.props.LoggedIn, "LOCAL")
    return (
      <div>
        {/* {this.props.LoggedIn ? <h1 className= "userTitle">Welcome {localStorage.title}</h1> : ''} */}
        {this.props.LoggedIn ? <UserPostContainer/> : ''}

      
      </div>
    );
  }
}

export default User;