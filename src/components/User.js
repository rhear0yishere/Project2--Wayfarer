import React, { Component } from 'react';
import UserPostContainer from '../containers/UserPostContainer'

class User extends Component {

  state = {
    userInfo: []
  }

  // componentDidMount () {
  //   axios.get('http://localhost:3002/api/)
  // }

  render() {
    console.log(this.props.email, "THIS")
    return (
      <div>
      <h1 className= "userTitle">Welcome  {this.props.email}</h1>
      <UserPostContainer/>
      </div>
    );
  }
}

export default User;