import React, { Component } from 'react';
import MyRoutes from './config/routes';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/Nav';
import Footer from './components/Footer'
import LoginPage from './components/LoginPage';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

import SignupPage from './components/SignupPage'



class App extends Component {
 
 
  state = {
    email: '' ,
    password: '',
    LoggedIn: false,
    user: null
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
    axios.post('https://localhost:3001/user/login', 

			{ email: this.state.email,
      	password: this.state.password }
			)
      .then( response => {
        console.log(response)
        localStorage.token = response.data.signedJwt
          this.setState({
            LoggedIn: true,
            user: response.data.user

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
    e.preventDefault()
    axios.post('https://localhost:3001/user/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then( response => {
      console.log(response.data);
      localStorage.token = response.data.signedJwt
      this.setState({
        LoggedIn: true
      })
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div >
           <Nav isLoggedIn={this.state.LoggedIn}
           loggedOut={this.logOut}/>

         { MyRoutes }  
         <Switch>
           <Route path = '/signup' 
           render = {(props) => {
             if(this.state.LoggedIn){
               return <Redirect to="/user"/>
             } else {
              return(
                <SignupPage {...props} LoggedIn={this.state.LoggedIn} takeInput={this.takeInput} signUp={this.signUp} /> )
             }
             }}
           />
          <Route path='/login' exact
              render={(props) => {
                if(this.state.LoggedIn){v
                  return <Redirect to="/user"/>
                } else {
                return (
                  <LoginPage LoggedIn={this.state.LoggedIn} handleInput={this.takeInput} handleLogIn={this.handleLogIn} />
                )
                }
              }}
          />
          <Route path='/profile' exact
              render={(props) => {
                return (
                  <LoginPage LoggedIn={this.state.LoggedIn} handleInput={this.takeInput} handleLogIn={this.handleLogIn} />
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
