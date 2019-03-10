import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

// import { Button,} from 'react-bootstrap';


class SignUpPage extends Component {
  render () {
    return (
  <div>
   
   <Form className='Signup'>
   <h1>CREATE AN ACCOUNT</h1>
           <Form.Field>
            <label>Email</label>
             <input placeholder='Email' name= "email"onChange= {this.props.takeInput} />
           </Form.Field>
      
           <Form.Field>
             <label>Password</label>
             <input placeholder='Password' name="password" onChange= {this.props.takeInput} />
           </Form.Field>

           <input value='Create Account' type ='submit' onClick={this.props.signUp}/>
         </Form> 

         </div>
   
    )}
}

export default SignUpPage





