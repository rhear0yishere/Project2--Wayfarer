
import React, { Component } from 'react';
import MainPost from '../components/MainPost'

class TipList extends Component {
  render() {
    let tips = this.props.tips.map ((tip) => {
    return (
      <div>
          <MainPost 
            key = {tip._id}
            tip = {tip}
            deleteTip ={this.props.deleteTip}
            updateTip= {this.props.updateTip}
          />

      </div>
    )
    })

    return (
      <ul>
        {tips}
      </ul>
    )
  }
}

export default TipList;
