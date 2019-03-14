import React, { Component } from 'react';
import {Carousel, Row, Col, Container} from 'react-bootstrap';
import img1 from './images/japan.jpg'
import img2 from './images/bigben.jpg'
import img3 from './images/paris.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';


class CityCarousel extends Component {
  state = {
    index: 0,
    direction: null
  };
 
  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  };
 
 
  render() {
    const { index, direction } = this.state;
 
    return (
     

      <Container className= "carousel" fluid={true}>
       <h1 className="welcomeWayfarer">Welcome To Wayfarer</h1>
        <Row noGutters={false}>
          <Col xs={12} md={12}>
            <Carousel
              activeIndex={index}
              direction={direction}
              onSelect={this.handleSelect}
            >
            <Carousel.Item className= "carousel"> <img className="pic d-block w-100" src={img1} alt="First slide" />
              <Carousel.Caption className= "carousel">
                <div className= "carousel" id="header">
                  <h1 >Japan</h1>
                  </div>
              </Carousel.Caption>
            </Carousel.Item>
 
            <Carousel.Item><img className=" pic img d-block w-100" src={img2} alt="Second slide" />
              <Carousel.Caption>
                <div id="header">
 
              </div>
              </Carousel.Caption>
             </Carousel.Item>
 
            <Carousel.Item><img className=" pic d-block w-100" src={img3} alt="Third slide" />
              <Carousel.Caption>
                <div id="header">
                  </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item><img className=" pic d-block w-100" src={img2} alt="Fourth slide" />
              <Carousel.Caption>
              <div id="header">
              
              </div>

              </Carousel.Caption>

            </Carousel.Item>

            </Carousel>

          </Col>

        </Row>

      </Container>

    );
  }
 }

 export default CityCarousel;