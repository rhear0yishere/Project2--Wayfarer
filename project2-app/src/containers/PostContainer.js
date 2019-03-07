import React, { Component } from 'react';
import TipModel from '../models/tips'
import TipList from '../components/TipList'
import NewPost from '../components/NewPost'

class PostContainer extends Component {

  state = {
    tips: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    TipModel.all().then( (res) => {
      this.setState ({
        tips: res.data.tips
      })
    });

  }

  deleteTip = (tip) => {
    TipModel.delete (tip).then((res)=>{
      let tips = this.state.tips.filter(function(tip){
        return tips._id != res.data._id
      });
      this.setState({tips});
    })
  }

  createTip = (x) => {
    let newPost = {
      text: x
    }

    TipModel.create(newPost).then((res) => {
      let tips = this.state.tips;
      let newTips = tips.push(res.data);
      this.setState({ newTips })
    })
  }



  // tips._id === tipId

  render() {


    return (
      <div>
          <p>{this.props.title}</p>

          <NewPost createTip = {this.createTip}/>
          <TipList 
            tips= {this.state.tips}
            deleteTip= {this.deleteTip} 
            />
          {/* <MainPost title= {this.props.title}/> */}
      </div>
    );
  }
}

export default PostContainer;