import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class CitiesList extends Component {
  render() {
    return (
      <div>
          <li><Link to={'/sf'}>San Francisco</Link></li>
          <li><Link to={'/london'}>London</Link></li>
          <li><Link to={'/seattle'}>Seattle</Link></li>
      </div>
    );
  }
}

export default CitiesList;