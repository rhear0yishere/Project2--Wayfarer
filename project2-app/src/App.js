import React, { Component } from 'react';
import MyRoutes from './config/routes';
// import 'semantic-ui-css/semantic.min.css';
import Nav from './components/Nav';

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


  render() {
    return (
      <div >
           <Nav/>
         { MyRoutes }     
          <footer/>   
      </div>
    );
  }
}

export default App;
