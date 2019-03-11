import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'
// import { Button,} from 'react-bootstrap';


class SignUpPage extends Component {
  render () {
    return (
  <div>
    
   <Form className='Signup'>
          <h1>LET'S GET STARTED!</h1>
           <Form.Field>
            <label>Email</label>
             <input placeholder='Email' name= "email"onChange= {this.props.takeInput} />
           </Form.Field>
      
           <Form.Field>
             <label>Password</label>
             <input placeholder='Password' name="password" onChange= {this.props.takeInput} />
           </Form.Field>

           <Button color='green' fluid type ='submit' onClick={this.props.signUp}> Create Account</Button>
         </Form> 

         </div>
   
    )}
}

export default SignUpPage

