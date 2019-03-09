import React, { Component } from 'react';
import '../index.css';

class SFCityInfo extends Component {

  render() {

    return (
      <div className={'city-header'}>
          <h1>{this.props.title}</h1>
          <p className={'city-description'}>{this.props.description}</p>
          <img className={'city-info'} src = {this.props.imagePath} alt=''/>
      </div>
    );
  }
}

export default SFCityInfo;