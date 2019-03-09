import React, { Component } from 'react';
import TipList from '../components/TipList'

class PostContainer extends Component {

  render() {
    // let list = []
    // for (var i=0; i<3; i++){
    //   list.push( <MainPost/>)
    // }
    return (
      <div>
          <TipList tipData={this.props.tips}/>
      </div>
    );
  }
}

export default PostContainer;