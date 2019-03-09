import React, { Component } from 'react';
import MainPost from '../components/MainPost'
import UserPosts from '../components/UserPosts'

class TipList extends Component {
  render() {
    let tips = this.props.tips.map ((tip) => {
    return (
      <div>
          <MainPost 
          key = {TipList._id}
          tip = {tip}
          deleteTip ={this.props.deleteTip}
          />

      </div>
    )
    })

    let tips2 = this.props.tips2.map ((tip) => {
      return (
        <div>
            <UserPosts
            key = {TipList._id}
            tip = {tip}
            deleteTip ={this.props.deleteTip}
            />
  
        </div>
      )
      })

    return (
      <ul>
        {tips}
        {tips2}
      </ul>
    )
  }
}

export default TipList;