<<<<<<< HEAD
=======
// import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import {Redirect} from 'react-router-dom'
// import 'semantic-ui-css/semantic.min.css';
// import axios from 'axios';


// //components
// import MyRoutes from './config/routes';
// import Nav from './components/Nav';
// import Footer from './components/Footer'
// import LoginPage from './components/LoginPage';
// import SignupPage from './components/SignupPage'
// import User from './components/User'
// import AllPosts from './components/AllPosts';

// class App extends Component {
  
//   state = {
//     email: '' ,
//     password: '',
//     LoggedIn: false,
//     user: null,
//     title: ''
//   }

//   componentDidMount () {
//     if (localStorage.token) {
//       this.setState({
//         LoggedIn: true
//       })
//     } else {
//       this.setState({
//         LoggedIn:false
//       })
//     }
//   }

//   takeInput = (e) => {
//     this.setState ({
//       [e.target.name] : e.target.value
      
//     })
//   }

//   signUp = (e) => {
//     e.preventDefault()
//     // axios.post('https://still-journey-70148.herokuapp.com/user/signup', 
//     axios.post('http://localhost:3001/user/signup', 

// 			{ email: this.state.email,
//       	password: this.state.password }
// 			)
//       .then( response => {
//         localStorage.token = response.data.signedJwt
//         localStorage.title = response.data.aUser.email
//         console.log(response.data)
//           this.setState({
//             LoggedIn: true,
//             user: response.data.user,
//             title:localStorage.title
//           })
//       })
//       .catch(err => console.log(err))
//   }

// logOut = () => {
//   this.setState({
//     email: '',
//     password: '',
//     LoggedIn: false
//   })
//   localStorage.clear()
// }


//   handleLogIn = (e) => {
//     e.preventDefault()
//     // axios.post('https://still-journey-70148.herokuapp.com/user/login', {
//     axios.post('http://localhost:3001/user/login',{
//       email: this.state.email,
//       password: this.state.password
//     })
//     .then( response => {
//       console.log(response.data);
//       localStorage.token = response.data.signedJwt
//       localStorage.title = response.data.user.email

//       this.setState({
//         LoggedIn: true,
//         title:localStorage.title

//       })
//     })
//     .catch(err => console.log(err))
//   }
//   render() {
//     return (
//       <div >
//            <Nav isLoggedIn={this.state.LoggedIn}
//            loggedOut={this.logOut}/>

//          { MyRoutes }  
//          <Switch>
//            <Route path = '/signup' 
//            render = {(props) => {
//              if(this.state.LoggedIn){
//                return <Redirect to="/User"/>
//              } else {
//               return(
//                 <SignupPage {...props} LoggedIn={this.state.LoggedIn} takeInput={this.takeInput} signUp={this.signUp} /> )
//              }
//              }}
//            />
//           <Route path='/login' exact
//               render={(props) => {
//                 if(this.state.LoggedIn){
//                   return <Redirect to="/User"/>
//                 } else {
//                 return (
//                   <LoginPage LoggedIn={this.state.LoggedIn} handleInput={this.takeInput} handleLogIn={this.handleLogIn} />
//                 )
//                 }
//               }}
//           />
//           <Route path='/User' exact
//               render={(props) => {
//                 return (
//                   <User LoggedIn={this.state.LoggedIn} title={this.state.title} />
//                 )
//               }}
//           />

          // <Route
          //     path='/AllPosts' exact
          //     render={(props) => {
          //       return (
          //         <AllPosts LoggedIn={this.state.LoggedIn} />
          //       )
          //     }}
          //   />
    
//          </Switch>

//           <Footer/>   

//       </div>
//     );
//   }
// }

// export default App;

>>>>>>> 21a61246e727920a6953b761b5ec3b848d7de931
import React, { Component } from 'react';
import MyRoutes from './config/routes';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/Nav';
import Footer from './components/Footer'
import LoginPage from './components/LoginPage';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import Landing from './components/Landing'
<<<<<<< HEAD

import SignupPage from './components/SignupPage'
// import User from './components/User'
=======
import AllPosts from './components/AllPosts'

import SignupPage from './components/SignupPage'
import User from './components/User'
>>>>>>> 21a61246e727920a6953b761b5ec3b848d7de931
// import UserPostContainer from './containers/UserPostContainer';


class App extends Component {
 
 
  state = {
    email: '' ,
    password: '',
    LoggedIn: false,
    user: null,
    title: ''
  }

  
  componentDidMount () {
    if (localStorage.token) {
      this.setState({
        LoggedIn: true
      })
    } else {
      this.setState({
        LoggedIn:false
      })
    }
  }




  takeInput = (e) => {
    this.setState ({
      [e.target.name] : e.target.value
    })
  }

  signUp = (e) => {
    e.preventDefault()
<<<<<<< HEAD
    axios.post('http://localhost:3002/user/signup', 
=======
    axios.post('http://localhost:3001/user/signup', 
>>>>>>> 21a61246e727920a6953b761b5ec3b848d7de931

			{ email: this.state.email,
      	password: this.state.password }
			)
      .then( response => {
        console.log(response)
        localStorage.token = response.data.signedJwt
        localStorage.title = response.data.aUser.email
          this.setState({
            LoggedIn: true,
            user: response.data.user,
            title:localStorage.title

          })
      })
      .catch(err => console.log(err))
  }



logOut = () => {
  this.setState({
    email: '',
    password: '',
    LoggedIn: false
  })
  localStorage.clear()
}


  handleLogIn = (e) => {
    console.log('loggggggg')
    e.preventDefault()
<<<<<<< HEAD
    axios.post('http://localhost:3002/user/login', {
=======
    axios.post('http://localhost:3001/user/login', {
>>>>>>> 21a61246e727920a6953b761b5ec3b848d7de931
      email: this.state.email,
      password: this.state.password
    })
    .then( response => {
      console.log(response.data);
      localStorage.token = response.data.signedJwt
      localStorage.title = response.data.user.email
      this.setState({
        LoggedIn: true,
<<<<<<< HEAD
        title:localStorage.title
=======
        // title:localStorage.title
>>>>>>> 21a61246e727920a6953b761b5ec3b848d7de931
      })
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div >
           <Nav 
            isLoggedIn={this.state.LoggedIn}
            loggedOut={this.logOut} 
            takeInput={this.takeInput} 
            handleLogIn={this.handleLogIn} 
            signUp={this.signUp}
          />

         { MyRoutes }  
         <Switch>

           
<<<<<<< HEAD
           <Route path = '/' 
           render = {(props) => {
             if(this.state.LoggedIn){
               return (
                <Redirect to="/user"/>
=======
           <Route path = '/' exact
           render = {(props) => {
             if(this.state.LoggedIn){
               return (
                <Redirect to="/User"/>
>>>>>>> 21a61246e727920a6953b761b5ec3b848d7de931
               )
             } else {
              return(
                
                  <Landing/>
              )
             }
             }}
           />
          {/* <Route path='/login' exact
              render={(props) => {
                if(this.state.LoggedIn){
                  return <Redirect to="/user"/>
                } else {
                return (
                  
                )
                }
              }}
          /> */}
<<<<<<< HEAD
          <Route path='/user' exact
              render={(props) => {
                return (
                  <user LoggedIn={this.state.LoggedIn} title={this.state.title} />
                )
              }}
          />
=======
          <Route path='/User' exact
              render={(props) => {
                return (
                  <User LoggedIn={this.state.LoggedIn} title={this.state.title} />
                )
              }}
          />

              <Route
              path='/AllPosts' exact
              render={(props) => {
                return (
                  <AllPosts LoggedIn={this.state.LoggedIn} />
                )
              }}
            />    

          
>>>>>>> 21a61246e727920a6953b761b5ec3b848d7de931
         </Switch>

          <Footer/>   

      </div>
    );
  }
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 21a61246e727920a6953b761b5ec3b848d7de931
