import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing'
import User from '../components/User'
import AllPosts from '../components/AllPosts'


export default (
    <Switch>
      <Route exact path='/' component={ Landing } />
      <Route path='/User' component={ User } />
      <Route path='/AllPosts' component={ AllPosts } />
    </Switch>
  )