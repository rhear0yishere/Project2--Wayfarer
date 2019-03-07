import React, { Component } from 'react';

class MainPost extends Component {
  render() {
    
    return (
      <li data-todos-index={ this.props.tips._id }>
        <div>
          <span>{ this.props.tip.text }</span>
          {/* <a 
            href="#removeTodo"
            className='remove'
            onClick={ this.deleteClickedTodo }>
            Remove
          </a> */}
        </div>
      </li>
    );
  }
}

export default MainPost;