import React, { Component } from 'react';
import UserPosts from '../components/UserPosts'
// import axios from 'axios';



class UserPostContainer extends Component {


  render() {
    let list = []
    for (var i=0; i<5; i++){
      list.push(<UserPosts/>)
    }
    return (
      <div>
          {list}
      </div>
    );
  }
}

export default UserPostContainer;