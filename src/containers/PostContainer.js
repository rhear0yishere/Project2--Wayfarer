import React, { Component } from 'react';
import MainPost from '../components/MainPost'

class PostContainer extends Component {


  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    TipModel.all().then( (res) => {
      this.setState ({
        tips: res.data.tips
      })
    }).catch((err)=> {
     console.log(err, 'error!!!!!!!')
    })

  }

  deleteTip = (id) => {
    TipModel.delete(id).then((res)=>{
      let tips = this.state.tips.filter(function(tip){

        console.log(tip._id, 'tip object!!!!!!!!!!!!');

        return tip._id != res.data._id
      });
      console.log(res.data._id)
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
    // let list = []
    // for (var i=0; i<3; i++){
    //   list.push( <MainPost/>)
    // }
  

    return (
      <div>
          <p>{this.props.title}</p>
          <MainPost title= {this.props.title}/>
      </div>
    );
  }
}

export default PostContainer;