import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing'
import User from '../components/User'
import AllPosts from '../components/AllPosts'
import SFCityContainer from '../containers/SFCityContainer';
import SignupModal from '../components/SignupModal';

<<<<<<< HEAD
import NewPost from '../components/NewPost'
=======
// import NewPost from '../components/NewPost'
>>>>>>> a96c7782d5a63642b02c6fbe4be98e57e6d1ec15



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
    
      <Route path='/AllPosts' component={ AllPosts } />
      <Route path='/SF' component={ SFCityContainer } />
          </Switch>
  )

//       {<Route path='/SignUP' component={SignupModal} />}
//       <Route path='/NewPost' component={ NewPost } />
>>>>>>> a96c7782d5a63642b02c6fbe4be98e57e6d1ec15
