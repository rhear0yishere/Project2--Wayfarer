// import React, { Component } from 'react';
// <<<<<<< chike
// import '../index.css';

// class MainPost extends Component {
  
//   render() {
    
//     // let list = ['Seattle', 'Seattle', 'San Francisco']
//     // for (var i=0; i<=list.length;i++){
//     //   if (list[i]===this.props.title){
//     //     console.log(list[i])
//     //   }
//     // }

//     return (
//       <div className={'city-post'}>
//          <div> {this.props.tipData.tip.city}</div>
//          <div> {this.props.tipData.tip.author} </div>
//          <div> {this.props.tipData.tip.title} </div>
//          <div> {this.props.tipData.tip.text} </div>
//       </div>
// =======
import EditPost from '../components/EditPost'

class MainPost extends Component {

deletingTip = (event) => {
  event.preventDefault();
  this.props.deleteTip(this.props.tip);
  
}

  render() {
    
    return (
      
      <li data-tips-index={ this.props.tip._id }>
      <div>
          <span>{ this.props.tip.text }</span>
          <a className = "remove"
            href="#removeTip"
            className='remove'
            onClick={this.deletingTip}
            >
              Remove
          </a> 
        </div>
        
        <EditPost
          tip= {this.props.tip}
          buttonName = "Edit Tip"
          updateTip = {this.props.updateTip}
        
        />
        
      </li>
    );
  }
}

export default MainPost;