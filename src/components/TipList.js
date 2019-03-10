import React, { Component } from 'react';
import MainPost from '../components/MainPost'
import UserPosts from '../components/UserPosts'

class TipList extends Component {
state ={
  LoggedIn: this.props.LoggedIn
}
  render() {
    let tips = this.props.tips.map ((tip) => {
    return (
      <div>
          <MainPost 
            LoggedIn= {this.state.LoggedIn}
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
               LoggedIn= {this.state.LoggedIn}
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
      <h2>My Tips</h2>
      <ul className= "specificUser">
        {tips2}
      </ul>
    </div>
    )
  }
}

export default TipList;
