import React, { Component } from 'react'


class LoginPage extends Component {
  render () {
    return (
      <div>
        <h2>Log In</h2>

        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email'  />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password'  />
          </div>
          <input value='Submit' type='submit' />
        </form>
      </div>
    )
  }
}

export default LoginPage
