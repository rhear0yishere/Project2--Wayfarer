
// import React, { Component } from 'react';
// <<<<<<< chike
// import TipList from '../components/TipList'

// class PostContainer extends Component {

//   render() {
//     // let list = []
//     // for (var i=0; i<3; i++){
//     //   list.push( <MainPost/>)
//     // }
//     return (
//       <div>
//           <TipList tipData={this.props.tips}/>
// =======

import TipModel from '../models/tips'
import TipList from '../components/TipList'
import NewPost from '../components/NewPost'

class PostContainer extends Component {

  state = {
    tips: [],
    specificTip: []
  };

 componentWillReceiveProps(){
   this.fetchData();
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
      // let tips = this.state.tips;
      // tips.find(tip => updatingTip(tip)).body = tipText.text;
      // this.setState({ tips });
      // let data = JSON.parse(res.data);
      console.log(res);
    })
  }


  // tips._id === tipId

  render() {


    return (
      <div className="PostContainer">
                 <NewPost createTip = {this.createTip}/>

          <p>{this.props.title}</p>
          {/* <li><Link to={'/NewPost'}>New Post</Link></li> */}


          <TipList 
            tips= {this.state.specificTip}
            updateTip= {this.updateTip}
            deleteTip= {this.deleteTip} 
            />
          {/* <MainPost title= {this.props.title}/> */}

      </div>
    );
  }
}

export default PostContainer;