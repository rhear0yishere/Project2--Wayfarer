import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'



class SFCityInfo extends Component {
  

  render() {

    return (
      <div>
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          <Image rounded centered className= "cityImage" src = {this.props.imagePath} alt=''/>
      </div>
    );
  }
}

export default SFCityInfo;
