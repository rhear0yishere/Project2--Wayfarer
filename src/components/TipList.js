import React, { Component } from 'react';
import MainPost from '../components/MainPost'

// let tips = [

//   {"user": {"email": "chike@gmail.com", "password": "something1"},
//   "tip": {"author": "chike", "image": "", "title": "chike title", "city": "Boston"}},
  
//   {"user": {"email": "eunice@gmail.com", "password": "something2"},
//   "tip": {"author": "eunice", "image": "", "title": "eunice title", "city": "SF"}},
  
//   {"user": {"email": "tristan@gmail.com", "password": "something3"},
//   "tip": {"author": "tristan", "image": "", "title": "tristan title", "city": "Miami"}}
  
//   ];

class TipList extends Component {
  state = {
      tipList: []
  }
  render() {
    let context = this;
    this.props.tipData.forEach((tip, index)=>{
      console.log()
        context.state.tipList.push(
          <MainPost tipData={tip}/>
        );
    });

    return (
      <div className="tipList">
        {this.state.tipList}
      </div>
    )
  }
}

export default TipList;