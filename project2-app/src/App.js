import React, { Component } from 'react';
import MyRoutes from './config/routes';
import Nav from './components/Nav'


class App extends Component {
  render() {
    return (
      <div >
        <Nav/>
        { MyRoutes }
      </div>
    );
  }
}

export default App;
