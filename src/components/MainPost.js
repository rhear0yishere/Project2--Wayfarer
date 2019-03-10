import React, { Component } from 'react';
import EditPost from '../components/EditPost'
import ShowMoreText from 'react-show-more-text';


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

    <div>



      <li  data-tips-index={ this.props.tip._id }>
      <div>
         <div className= "tipTitleDiv">
         <h4>Title</h4>

          <span className= "spanTip">{ this.props.tip.title }</span>

          </div>

          <h4>Tip</h4>
          
          <ShowMoreText
        
                lines={3}
                more='Show more'
                less='Show less'
                anchorClass=''
                onClick={this.executeOnClick}
            >
            
                <div className= "tipTextDiv">
                <span className= "spanTip">  { this.props.tip.text }</span>
                </div>           
           </ShowMoreText>





          {this.props.showUserTips ? <a className = "remove"
            href="#removeTip"
            onClick={this.deletingTip}
            >
              Remove
          </a>  : ''}

          
        </div >
        <div className="listTip">
          {this.props.showUserTips  ? <EditPost
          tip= {this.props.tip}
          buttonName = "Edit Tip"
          updateTip = {this.props.updateTip}
        
        /> : ''}
        </div>

        
        
      </li>

      </div>

      
    );
  }
}

export default MainPost;