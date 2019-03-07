import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'


class LoginPage extends Component {
  render () {
    return (
  <div>
      <h1>Login</h1>
    
      <Form className='Login'>
      <Form.Field>
        <label>Username</label>
        <input placeholder='Username' onChange={this.props.handleInput} />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder='Password' onChange={this.props.handleInput} />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit' onClick={this.props.handleLogIn}>Sign In</Button>
    </Form>
    </div>
    )
    
      
    }
  }
      export default LoginPage
      