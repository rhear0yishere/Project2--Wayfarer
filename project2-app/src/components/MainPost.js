import React, { Component } from 'react';

class MainPost extends Component {
  render() {
    
    let list = ['Seattle', 'Seattle', 'San Francisco']
    for (var i=0; i<=list.length;i++){
      if (list[i]===this.props.title){
        console.log(list[i])
      }
    }
    return (
      <div>
          <h1>{this.props.title}</h1>
          <p>Main Post Text</p>
      </div>
    );
  }
}

export default MainPost;