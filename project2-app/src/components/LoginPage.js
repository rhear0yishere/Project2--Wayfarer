import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
// import {Form, Button} from 'react-bootstrap';


class LoginPage extends Component {
  render () {
    return (
    
      <Form className='Login'>
      <Form.Field>
        <label>Username</label>
        <input placeholder='Username' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder='Password' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Sign In</Button>
    </Form>
      )
    }
  }
      export default LoginPage
      