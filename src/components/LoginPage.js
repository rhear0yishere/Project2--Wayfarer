import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'


class LoginPage extends Component {
  render () {
    return (
  <div>
      
    
      <Form className='Login'>
      
      <Form.Field>
      <h1>SIGN IN</h1>
        <label>Username</label>
        <input placeholder='Username' name="email" onChange={this.props.takeInput} />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder='Password' name="password" onChange={this.props.takeInput} />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button color='green' fluid type='submit' onClick={this.props.handleLogIn}>Sign In</Button>
    </Form>
    </div>
    )
    
      
    }
  }
      export default LoginPage
      