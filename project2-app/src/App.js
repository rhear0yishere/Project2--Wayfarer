import React, { Component } from 'react';
import MyRoutes from './config/routes';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/Nav';
import LoginPage from './components/LoginPage';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

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

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSignUp = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/user/signup', 
			{ email: this.state.email,
      	password: this.state.password }
			)
      .then( response => {
        console.log(response)
        localStorage.token = response.data.signedJwt
          this.setState({
            isLoggedIn: true
          })
      })
      .catch(err => console.log(err))
  }


  handleLogIn = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/user/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then( response => {
      localStorage.token = response.data.signedJwt
      this.setState({
        isLoggedIn: true
      })
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div >
           <Nav/>
           <switch>
           <Route path='/login'
              render={(props) => {
                return (
                  <LoginPage isLoggedIn={this.state.LoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
                )
              }}
            />
            </switch>
         { MyRoutes }     
          <footer/>   

      </div>
    );
  }
}

export default App;
