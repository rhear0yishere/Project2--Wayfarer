import React, { Component } from 'react';
import MainPost from '../components/MainPost'

class TipList extends Component {
state ={
  LoggedIn: this.props.LoggedIn,
  showUserTips: this.props.showUserTips,
  showMainTips:this.props.showMainTips,
  title: this.props.title
}
  render() {
    let tips = this.props.tips.map ((tip) => {
    return (
      <div>

          {this.state.showMainTips ? <MainPost 
              title= {this.state.title}
               LoggedIn= {this.state.LoggedIn}
              key = {tip._id}
              tip = {tip}
              deleteTip ={this.props.deleteTip}
              updateTip= {this.props.updateTip}
            /> : ''}

      </div>
    )
    })

    let tips2 = this.props.tips2.map ((tip) => {
      return (
        <div>
          {this.state.showUserTips ? <MainPost 
              showUserTips= {this.state.showUserTips}
               LoggedIn= {this.state.LoggedIn}
              key = {tip._id}
              tip = {tip}
              deleteTip ={this.props.deleteTip}
              updateTip= {this.props.updateTip}
            /> : ''}

        </div>
      )
      })


    return (
    <div>
      {this.state.showMainTips ?  <h1>{this.props.title} Tips</h1> : ''}

     
      <ul className= "allTips">
        {tips}
      </ul>

      {/* {this.state.showUserTips ? <h1 className= "userTitle">Welcome {localStorage.title}</h1> : ''} */}
      {this.state.showUserTips ? <h1>My Tips</h1> : ''}

      <ul className= "specificUser">
        {tips2}
      </ul>
    </div>
    )
  }
}

export default TipList;
 