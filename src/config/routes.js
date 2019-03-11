import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing'
<<<<<<< HEAD
import User from '../components/User'
import AllPosts from '../components/AllPosts'
import SFCityContainer from '../containers/SFCityContainer';
import SignupModal from '../components/SignupModal';

import NewPost from '../components/NewPost'
=======
import SFCityContainer from '../containers/SFCityContainer';
>>>>>>> 21a61246e727920a6953b761b5ec3b848d7de931



export default (
    <Switch>
<<<<<<< HEAD
      {/* <Route exact path='/' component={ Landing } /> */}
      <Route path='/User' component={ User } />
      <Route path='/AllPosts' component={ AllPosts } />
      <Route path='/SF' component={ SFCityContainer } />
      {/* <Route path='/SignUP' component={SignupModal} /> */}
      <Route path='/NewPost' component={ NewPost } />





    </Switch>
  )
=======
      <Route exact path='/' component={ Landing } />
      {/* <Route path='/AllPosts' component={ AllPosts } /> */}
      <Route path='/SF' component={ SFCityContainer } />
      
    </Switch>
  )


  
>>>>>>> 21a61246e727920a6953b761b5ec3b848d7de931
