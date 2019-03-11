import React, { Component } from 'react';
import {Card, Icon} from 'semantic-ui-react'

class About extends Component {
  render() {
    return (
      <div className='about'>
        <h1>REVIEWS</h1>
        <div className='row'>
        <div className='col-lg-3'>
        <Card className="chike">
          <Card.Content className="abouthead"  header='Chike' />
          <Card.Content>
            <p>I love Wonderlust! Customer for life!</p>
            </Card.Content>
          <Card.Content extra>
      <Icon name='user' />
      302 Friends
    </Card.Content>
  </Card>
        </div>
        <div className='col-lg-3'>
        <Card className="rhea">
          <Card.Content className="abouthead" header='Rhea' />
          <Card.Content>
            <p>I love Wonderlust! Customer for life!</p>
            </Card.Content>
          <Card.Content extra>
      <Icon name='user' />
      302 Friends
    </Card.Content>
  </Card>
        </div>
        <div className='col-lg-3'>
        <Card className="eunice">
          <Card.Content className="abouthead" header='Eunice' />
          <Card.Content>
            <p>I love Wonderlust! Customer for life!</p>
            </Card.Content>
          <Card.Content extra>
      <Icon name='user' />
      302 Friends
    </Card.Content>
  </Card>
  </div>
        <div className='col-lg-3'>
        <Card className="tristan">
          <Card.Content className="abouthead" header='Tristan' />
          <Card.Content>
            <p>I love Wonderlust! Customer for life!</p>
            </Card.Content>
          <Card.Content extra>
      <Icon name='user' />
      302 Friends
    </Card.Content>
  </Card>
        </div>
  
        </div>
        </div>
        
    );
  }
}

export default About;
