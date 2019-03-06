import React, { Component } from 'react';
import CitiesList from '../components/CitiesList'



class CitiesContainer extends Component {
  render() {
    let list = []
    for (var i=0; i<4; i++){
      list.push(<CitiesList/>)
    }
    return (
      <div className= "citiesList">
        <h1>List of Cities</h1>
         <CitiesList/>
      </div>
    );
  }
}

export default CitiesContainer;