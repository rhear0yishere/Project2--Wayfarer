import React, { Component } from 'react';
import EditPost from '../components/EditPost'

class UserPosts extends Component {

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

      <div className="userPost">
      <div className="profilePic">


    );
  }
}

export default UserPosts;