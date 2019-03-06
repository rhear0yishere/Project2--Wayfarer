import React, { Component } from 'react';
import TopicParagraph from '../components/TopicParagraph'

class TopicsContainer extends Component {
  render() {
    let list = []
    for (var i=0; i<3; i++){
      list.push(<TopicParagraph/>)
    }
    return (
      <div>
        {list}
      </div>
    );
  }
}

export default TopicsContainer ;