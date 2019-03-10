import React, { Component } from 'react';
import EditPost from '../components/EditPost'

class MainPost extends Component {

deletingTip = (event) => {
  event.preventDefault();
  this.props.deleteTip(this.props.tip);
  
}

  render() {
    
    return (
      
      <li className="listTip" data-tips-index={ this.props.tip._id }>
      <div>
          <span className= "spanTip">{ this.props.tip.text }</span>
          {this.props.LoggedIn ? <a className = "remove"
            href="#removeTip"
            className='remove'
            onClick={this.deletingTip}
            >
              Remove
          </a>  : ''}

          
        </div>
        {this.props.LoggedIn ? <EditPost
          tip= {this.props.tip}
          buttonName = "Edit Tip"
          updateTip = {this.props.updateTip}
        
        /> : ''}

        
        
      </li>

      
    );
  }
}

export default MainPost;