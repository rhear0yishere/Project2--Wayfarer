import React, { Component } from 'react';
import TipModel from '../models/tips'
import TipList from '../components/TipList'
import NewPost from '../components/NewPost'

class PostContainer extends Component {

  state = {
    tips: [],
    specificTip: [],
    userSpecific: [],
    LoggedIn: this.props.LoggedIn
  };

 componentWillReceiveProps(){
   this.fetchData();
 }

 componentDidMount(){
  this.fetchData();

  this.fetchDataUser();
 }


  fetchData(){
    TipModel.all().then( (res) => {
      this.setState ({
        tips: res.data.tips
      })
      
      let specificTip =[];
      for(let i=0; i<this.state.tips.length;i++){
        if (this.props.title === this.state.tips[i].city){
          specificTip.push(this.state.tips[i])
          this.setState({
            specificTip: specificTip
          })
          }
      }

    })

  }


  fetchDataUser(){

    TipModel.all().then( (res) => {
      this.setState ({
        tips: res.data.tips
      })
      
      let userSpecific =[];
      for(let i=0; i<this.state.tips.length;i++){
        if (localStorage.title === this.state.tips[i].author){
          userSpecific.push(this.state.tips[i])
          this.setState({
            userSpecific: userSpecific
          })
          }
      }

    })

  }

  deleteTip = (id) => {
    TipModel.delete(id).then((res)=>{
      let tips = this.state.specificTip.filter(function(tip){

        console.log(tip._id, 'tip object!!!!!!!!!!!!');

        return tip._id != res.data._id
      });
      console.log(res.data._id)
      this.setState({tips});
    })
  }

  createTip = (message, city,author) => {
    let newPost = {
      text: message,
      city: city,
      author: author
    }

    TipModel.create(newPost).then((res) => {
      let tips = this.state.tips;
      let newTips = tips.push(res.data);
      this.setState({ newTips })
    })
  }

  updateTip = (tipId, tipText) => {
    function updatingTip(tip) {
      return tip._id === tipId;
    }
    TipModel.update(tipId, tipText).then((res) => {
      console.log(res);
    })
  }


  render() {

    return (
      <div className="PostContainer">

          <h2>{this.props.title}Tips</h2>
          {this.state.LoggedIn ? <NewPost createTip = {this.createTip}/> : ''}

          <TipList 
            LoggedIn= {this.state.LoggedIn}
            tips= {this.state.specificTip}
            tips2= {this.state.userSpecific}
            updateTip= {this.updateTip}
            deleteTip= {this.deleteTip} 
            />
      </div>
    );
  }
}

export default PostContainer;