import React, { Component } from 'react';

class SFCityInfo extends Component {

  render() {

    return (
      <div>
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          <img class= "cityImage" src = {this.props.imagePath} alt=''/>
      </div>
    );
  }
}

export default SFCityInfo;