// import React, { Component } from 'react';
// import TipModel from '../models/tips'
// import TipList from '../components/TipList'
// import NewPost from '../components/NewPost'

// class PostContainer extends Component {

//   state = {
//     tips: []
//   };


  
//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData(){
//     TipModel.all().then( (res) => {
//       this.setState ({
//         tips: res.data.tips
//       })

//     }).catch((err)=> {
//      console.log(err, 'error!!!!!!!');
//     })

//     // let list =[]
//     // TipModel.all().then((res)=>{
//     //   let tips = this.state.tips.filter(function(tip){
//     //     });
//     //   for (let i=0; i<res.data.tips.length; i++){
//     //     if (res.data.tips[i].city === 'Seattle'){
//     //       list.push(res.data.tips[i].city)
//     //       this.setState({
//     //         tips:list
//     //       });
//     //     }
//     //   }
//     // })
//   }


//   deleteTip = (id) => {
//     TipModel.delete(id).then((res)=>{
//       let tips = this.state.tips.filter(function(tip){
  
//         return tip._id != res.data._id
//       });
      
//       this.setState({tips});
//       console.log(res.data._id)
//     })
//   }


//   createTip = (message, city) => {
//     let newPost = {
//       text: message,
//       city: city 
//     }

//     TipModel.create(newPost).then((res) => {
//       let tips = this.state.tips;
//       let newTips = tips.push(res.data);
//       this.setState({ newTips })
//     })
//   }


//   updateTip = (tipId, tipText) => {
//     function updatingTip(tip) {
//       return tip._id === tipId;
//     }
//     TipModel.update(tipId, tipText).then((res) => {
//       console.log(res);
//     })
//   }


//   // tips._id === tipId

//   render() {

//     // console.log(this.state.tips,"STATE of TIPS")
//     return (
//       <div className="PostContainer">
//                  <NewPost createTip = {this.createTip}/>
//           <h1>Title</h1>
//           <h1>{this.props.title} Tips</h1>
//           {/* <li><Link to={'/NewPost'}>New Post</Link></li> */}

//           <TipList 
//               tips= {this.state.tips}
//               updateTip= {this.updateTip}
//                deleteTip= {this.deleteTip} 
//           />
//             {/* // allTips= {this.state.tips}
//             // updateTip= {this.updateTip}
//             // deleteTip= {this.deleteTip} 
//             /> */}
//           {/* <MainPost title= {this.props.title}/> */}
//       </div>
//     );
//   }
// }

// export default PostContainer;
import React, { Component } from 'react';
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



  createTip = (message, city) => {
    let newPost = {
      text: message,
      city: city 
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