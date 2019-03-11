import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing'
import SFCityContainer from '../containers/SFCityContainer';



export default (
    <Switch>
      {/* <Route exact path='/' component={ Landing } /> */}
      {/* <Route path='/AllPosts' component={ AllPosts } /> */}
      <Route path='/SF' component={ SFCityContainer } />
      
    </Switch>
  )


  
  
