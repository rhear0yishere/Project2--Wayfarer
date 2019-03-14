import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'


class SignUpPage extends Component {
  render () {
    return (
  <div>
    <h1>Signup</h1>
   <Form className = 'Signup'>
           <Form.Field>
            <label>Email</label>
             <input placeholder = 'Email' name = "email"onChange= {this.props.takeInput} />
           </Form.Field>
      
           <Form.Field>
             <label>Password</label>
             <input placeholder = 'Password' name = "password" onChange= {this.props.takeInput} />
           </Form.Field>

           <input value='Create Account' type = 'submit' onClick = {this.props.signUp}/>
         </Form> 

         </div>
   
    )}
}

export default SignUpPage





