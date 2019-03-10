import React, { Component } from 'react';
import EditPost from '../components/EditPost'

class MainPost extends Component {

deletingTip = (event) => {
  event.preventDefault();
  this.props.deleteTip(this.props.tip);
}

executeOnClick(isExpanded) {
  console.log(isExpanded);
}

  render() {
    
    return (
      
      <li  data-tips-index={ this.props.tip._id }>
      <div>
         <div className= "tipTitleDiv">
         <h4>Title</h4>
          <span className= "spanTip">{ this.props.tip.title }</span>
          </div>
          <div className= "tipTextDiv">
          <h4>Tip</h4>
          <span className= "spanTip">  { this.props.tip.text }</span>
          </div>
          {this.props.LoggedIn ? <a className = "remove"
            href="#removeTip"
            className='remove'
            onClick={this.deletingTip}
            >
              Remove
          </a>  : ''}

          
        </div >
        <div className="listTip">
          {this.props.LoggedIn  ? <EditPost
          tip= {this.props.tip}
          buttonName = "Edit Tip"
          updateTip = {this.props.updateTip}
        
        /> : ''}
        </div>

        
        
      </li>

      
    );
  }
}

export default MainPost;