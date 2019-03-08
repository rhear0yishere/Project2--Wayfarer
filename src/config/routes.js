import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing'
import User from '../components/User'
import AllPosts from '../components/AllPosts'
import SFCityContainer from '../containers/SFCityContainer';
import SignupModal from '../components/SignupModal';

// import NewPost from '../components/NewPost'



export default (
    <Switch>
      <Route exact path='/' component={ Landing } />
      <Route path='/User' component={ User } />
      <Route path='/AllPosts' component={ AllPosts } />
      <Route path='/SF' component={ SFCityContainer } />
      {/* <Route path='/SignUP' component={SignupModal} /> */}
      {/* <Route path='/NewPost' component={ NewPost } /> */}





    </Switch>
  )