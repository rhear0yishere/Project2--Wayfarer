import React, { Component } from 'react';
import MyRoutes from './config/routes';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/Nav';
import SignupPage from './components/SignupPage'
import axios from 'axios'
import { Switch, Route } from 'react-router-dom';

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
    axios.post('http://localhost:3002/user/signup', 
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

  render() {
    return (
      <div >
           <Nav/>
         { MyRoutes }  
         <Switch>
           <Route path = '/signup' 
           render = {(props) => {
             return(
              <SignupPage LoggedIn={this.state.LoggedIn} takeInput={this.takeInput} signUp={this.signUp} /> )

           }}
           />
      
         </Switch>
          <footer/>   
      </div>
    );
  }
}

export default App;
