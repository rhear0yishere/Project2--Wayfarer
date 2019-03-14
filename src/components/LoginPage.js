import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'


class LoginPage extends Component {
  render () {
    return (
  <div>
      <h1>Login</h1>
    
      <Form className = 'Login'>
        <Form.Field>
           <label>Username</label>
            <input placeholder = 'Username' name = "email" onChange = {this.props.takeInput} />
        </Form.Field>
        <Form.Field>
           <label>Password</label>
           <input placeholder = 'Password' name = "password" onChange = {this.props.takeInput} />
        </Form.Field>
        <Button type='submit' onClick = {this.props.handleLogIn}>Sign In</Button>
    </Form>
    </div>
    )
    
      
    }
  }
      export default LoginPage
      