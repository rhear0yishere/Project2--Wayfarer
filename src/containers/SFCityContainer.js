import React, { Component } from 'react';
import SFCityInfo from '../components/SFCityInfo'
import PostContainer from './PostContainer'
import TipModel from '../models/tips'
import { Button } from 'semantic-ui-react'


class SFCityContainer extends Component {

  state = {
    title: 'Seattle',
    description : "Seattle, a city on Puget Sound in the Pacific Northwest, is surrounded by water, mountains and evergreen forests, and contains thousands of acres of parkland. Washington State’s largest city, it’s home to a large tech industry, with Microsoft and Amazon headquartered in its metropolitan area. The futuristic Space Needle, a 1962 World’s Fair legacy, is its most iconic landmark. "
    ,imagePath: "https://cdn.thecrazytourist.com/wp-content/uploads/2019/02/ccimage-shutterstock_278248754.jpg",
    LoggedIn: this.props.LoggedIn,
    showMainTips: true
  };

changeLondon= () => {
      this.setState({
          title:'London',
          description: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city",
          imagePath: "https://cdn.thecrazytourist.com/wp-content/uploads/2018/08/ccimage-shutterstock_433759954.jpg"
        });
}


changeSeattle= () => {
  this.setState({
     title:'Seattle',
     description : "Seattle, a city on Puget Sound in the Pacific Northwest, is surrounded by water, mountains and evergreen forests, and contains thousands of acres of parkland. Washington State’s largest city, it’s home to a large tech industry, with Microsoft and Amazon headquartered in its metropolitan area. The futuristic Space Needle, a 1962 World’s Fair legacy, is its most iconic landmark. "
    ,imagePath: "https://cdn.thecrazytourist.com/wp-content/uploads/2019/02/ccimage-shutterstock_278248754.jpg"
    });
}

changeSanFran= () => {
  this.setState({
     title:'San Francisco',
     description: "San Francisco, in northern California, is a hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay. It's known for its year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses. The Financial District's Transamerica Pyramid is its most distinctive skyscraper. In the bay sits Alcatraz Island, site of the notorious former prison.",
     imagePath: "https://cdn.thecrazytourist.com/wp-content/uploads/2017/09/ccimage-shutterstock_412496293.jpg"
    });
}

  getCities = () => {
    TipModel.findCity(this.state.title).then((res)=>{
      console.log(res);
    })
  }

  render() {
    console.log(this.state.LoggedIn, "IS IT")


    return (
  <div className= "CITYDIV">
    
    <div className= "citiesList">
    <h2 className="citiesTitle">Cities</h2>
        <ul className="citiesButtons">
          <Button size='huge' className={"button"} onClick={this.changeSeattle}>Seattle</Button>
          <Button size='huge' className={"button"} onClick={this.changeLondon}>London</Button>
          <Button size='huge' className={"button"} onClick={this.changeSanFran}>San Francisco</Button>
          
        </ul>
      </div>

      <div className ="mainCity">
          <SFCityInfo title ={this.state.title} description= {this.state.description} imagePath={this.state.imagePath}/>
          <PostContainer showMainTips={this.state.showMainTips} title ={this.state.title} LoggedIn= {this.state.LoggedIn}/>       </div>

    </div>
    );
  }
}

export default SFCityContainer;