import React, { Component } from 'react';
import '../index.css';

class MainPost extends Component {
  
  render() {
    
    // let list = ['Seattle', 'Seattle', 'San Francisco']
    // for (var i=0; i<=list.length;i++){
    //   if (list[i]===this.props.title){
    //     console.log(list[i])
    //   }
    // }

    return (
      <div className={'city-post'}>
         <div> {this.props.tipData.tip.city}</div>
         <div> {this.props.tipData.tip.author} </div>
         <div> {this.props.tipData.tip.title} </div>
         <div> {this.props.tipData.tip.text} </div>
      </div>
    );
  }
}

export default MainPost;