import React, { Component } from 'react';
<<<<<<< HEAD
import { Button, Checkbox, Form } from 'semantic-ui-react'

=======
import { Form } from 'semantic-ui-react'
>>>>>>> 21a61246e727920a6953b761b5ec3b848d7de931
// import { Button,} from 'react-bootstrap';


class SignUpPage extends Component {
  render () {
    return (
  <div>
<<<<<<< HEAD
   
   <Form className='Signup'>
   <h1>CREATE AN ACCOUNT</h1>
=======
    <h1>Signup</h1>
   <Form className='Signup'>
>>>>>>> 21a61246e727920a6953b761b5ec3b848d7de931
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





