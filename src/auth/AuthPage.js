import React, { Component } from 'react';
import './AuthPage.css';
import { signIn, signUp } from '../utils/open-at-your-own-risk.js';

class AuthPage extends Component {
  state = {
    isSignUp: true,
    name: '',
    email: '',
    password: ''
  }

  handleSwitch = () => {
    this.setState({ isSignup: !this.state.isSignUp });
  }

  handSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  handleNameChange = ({ target }) => {
    this.setState({
      name: target.value
    });
  }

  handleEmailChange = ({ target }) => {
    this.setState({
      email: target.value
    });
  }

  handlePasswordChange = ({ target }) => {
    this.setState({
      password: target.value
    });
  }

  render() {
    const { isSignUp, name, email, password } = this.state;

    return (
      <div className="AuthPage">

        <h2>Sign {isSignUp ? 'Up' : 'In'}</h2>

        <form className="AuthPage" onSubmit={this.handleSubmit}>
          {
            isSignUp && <p>
              <label>
                <input name="name" placeholder="Name"
                  required={true}
                  onChange={this.handleNameChange} />
              </label>
            </p>
          }

          <p>
            <label>
              <input name="email" placeholder="Email"
                required={true}
                onChange={this.handleEmailChange} />
            </label>
          </p>

          <p>
            <label>
              <input name="email" type="password" placeholder="Password"
                required={true}
                onChange={this.handlePasswordChange} />
            </label>
          </p>

          <p>
            <button type="submit">
              Sign {isSignUp ? 'Up' : 'In'}
            </button>
          </p>

          <p>
            <button type="button" className="switch" onClick={this.handleSwitch}>
              {
                isSignUp
                  ? 'Already have an account?'
                  : 'Need to create an account?'
              }
            </button>
          </p>
        </form>
      </div>

    );
  }
}

export default AuthPage;


