import React, { Component } from 'react';
import CitiesList from '../components/CitiesList'



class CitiesContainer extends Component {
  render() {
    let list = []
    for (var i=0; i<3; i++){
      list.push(<CitiesList/>)
    }
    return (
      <div>
          {list}
      </div>
    );
  }
}

export default CitiesContainer;