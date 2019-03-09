import React, { Component } from 'react';
import MainPost from '../components/MainPost'
import UserPosts from '../components/UserPosts'

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

    let tips2 = this.props.tips2.map ((tip) => {
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
    <div>
      <ul className= "allTips">
        {tips}
      </ul>
      <ul className= "specificUser">
        <h2>My Tips</h2>
        {tips2}
      </ul>
    </div>
    )
  }
}

export default TipList;