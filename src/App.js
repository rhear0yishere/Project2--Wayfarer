import React, { Component } from 'react';
import MyRoutes from './config/routes';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/Nav';
import Footer from './components/Footer'
import LoginPage from './components/LoginPage';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
<<<<<<< HEAD
import Landing from './components/Landing'

import SignupPage from './components/SignupPage'

=======
import SignupPage from './components/SignupPage'
import User from './components/User'
import UserPostContainer from './containers/UserPostContainer';
>>>>>>> a96c7782d5a63642b02c6fbe4be98e57e6d1ec15


class App extends Component {
 
 
  state = {
    email: '' ,
    password: '',
    LoggedIn: false,
<<<<<<< HEAD
    user: null
=======
    user: null,
    title: ''
>>>>>>> a96c7782d5a63642b02c6fbe4be98e57e6d1ec15
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

<<<<<<< HEAD



  takeInput = (e) => {
    this.setState ({
      [e.target.name] : e.target.value
=======
  takeInput = (e) => {
    this.setState ({
      [e.target.name] : e.target.value
      
>>>>>>> a96c7782d5a63642b02c6fbe4be98e57e6d1ec15
    })
  }

  signUp = (e) => {
    e.preventDefault()
<<<<<<< HEAD
    axios.post('http://localhost:3002/user/signup', 
=======
    axios.post('https://still-journey-70148.herokuapp.com/', 
>>>>>>> a96c7782d5a63642b02c6fbe4be98e57e6d1ec15

			{ email: this.state.email,
      	password: this.state.password }
			)
      .then( response => {
<<<<<<< HEAD
        console.log(response)
        localStorage.token = response.data.signedJwt
          this.setState({
            LoggedIn: true,
            user: response.data.user

=======
        localStorage.token = response.data.signedJwt
        localStorage.title = response.data.aUser.email
        console.log(response.data)
          this.setState({
            LoggedIn: true,
            user: response.data.user,
            title:localStorage.title
>>>>>>> a96c7782d5a63642b02c6fbe4be98e57e6d1ec15
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
<<<<<<< HEAD
    console.log('loggggggg')
    e.preventDefault()
    axios.post('http://localhost:3002/user/login', {
=======
    e.preventDefault()
    axios.post('https://still-journey-70148.herokuapp.com/', {
>>>>>>> a96c7782d5a63642b02c6fbe4be98e57e6d1ec15
      email: this.state.email,
      password: this.state.password
    })
    .then( response => {
      console.log(response.data);
      localStorage.token = response.data.signedJwt
<<<<<<< HEAD
      this.setState({
        LoggedIn: true
=======
      localStorage.title = response.data.user.email

      this.setState({
        LoggedIn: true,
        title:localStorage.title

>>>>>>> a96c7782d5a63642b02c6fbe4be98e57e6d1ec15
      })
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div >
<<<<<<< HEAD
           <Nav 
            isLoggedIn={this.state.LoggedIn}
            loggedOut={this.logOut} 
            takeInput={this.takeInput} 
            handleLogIn={this.handleLogIn} 
            signUp={this.signUp}
          />

         { MyRoutes }  
         <Switch>

           
           <Route path = '/' 
           render = {(props) => {
             if(this.state.LoggedIn){
               return (
                <Redirect to="/user"/>
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
          <Route path='/profile' exact
              render={(props) => {
                return (
                  <LoginPage LoggedIn={this.state.LoggedIn} handleInput={this.takeInput} handleLogIn={this.handleLogIn} />
=======
           <Nav isLoggedIn={this.state.LoggedIn}
           loggedOut={this.logOut}/>

         { MyRoutes }  
         <Switch>
           <Route path = '/signup' 
           render = {(props) => {
             if(this.state.LoggedIn){
               return <Redirect to="/AllPosts"/>
             } else {
              return(
                <SignupPage {...props} LoggedIn={this.state.LoggedIn} takeInput={this.takeInput} signUp={this.signUp} /> )
             }
             }}
           />
          <Route path='/login' exact
              render={(props) => {
                if(this.state.LoggedIn){
                  return <Redirect to="/AllPosts"/>
                } else {
                return (
                  <LoginPage LoggedIn={this.state.LoggedIn} handleInput={this.takeInput} handleLogIn={this.handleLogIn} />
                )
                }
              }}
          />
          <Route path='/User' exact
              render={(props) => {
                return (
                  <User title={this.state.title} />
>>>>>>> a96c7782d5a63642b02c6fbe4be98e57e6d1ec15
                )
              }}
          />
         </Switch>

          <Footer/>   

      </div>
    );
  }
}

export default App;
<<<<<<< HEAD
=======


>>>>>>> a96c7782d5a63642b02c6fbe4be98e57e6d1ec15
