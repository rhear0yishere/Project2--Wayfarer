import React, { Component } from 'react';
import MainPost from '../components/MainPost'

class PostContainer extends Component {



  render() {
    // let list = []
    // for (var i=0; i<3; i++){
    //   list.push( <MainPost/>)
    // }
  

    return (
      <div>
          <p>{this.props.title}</p>
          <MainPost title= {this.props.title}/>
      </div>
    );
  }
}

export default PostContainer;