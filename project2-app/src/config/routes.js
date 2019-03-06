import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing'
import User from '../components/User'
import AllPosts from '../components/AllPosts'
import LoginPage from '../components/LoginPage'
import SignupPage from '../components/SignupPage'
import SFCityContainer from '../containers/SFCityContainer';
import LondonContainer from '../containers/LondonContainer';


export default (
    <Switch>
      <Route exact path='/' component={ Landing } />
      <Route path='/User' component={ User } />
      <Route path='/AllPosts' component={ AllPosts } />
      <Route path='/Login' component={ LoginPage } />
      <Route path='/Signup' component={ SignupPage } />
      <Route path='/SF' component={ SFCityContainer } />
      <Route path='/london' component={ LondonContainer } />



    </Switch>
  )