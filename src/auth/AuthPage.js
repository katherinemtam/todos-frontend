import React, { Component } from 'react';
import './AuthPage.css';
import { signIn, signUp } from '../utils/open-at-your-own-risk.js';

class AuthPage extends Component {
  state = {
    isSignUp: true,
    name: '',
    email: '',
    password: '',
    error: ''
  }

  handleSwitch = () => {
    this.setState({ isSignup: !this.state.isSignUp });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { isSignUp } = this.state;
    this.setState({ error: '' });

    try {
      const action = isSignUp ? signUp : signIn;

      const user = await action(this.state);

      console.log(user);
    }
    catch (err){
      console.log(err.message);
      this.setState({ error: err.error });
    }
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
    const { isSignUp, name, email, password, error } = this.state;

    return (
      <div className="AuthPage">

        <h2>Sign {isSignUp ? 'Up' : 'In'}</h2>

        <form className="AuthPage" onSubmit={this.handleSubmit}>
          {
            isSignUp && <p>
              <label>
                <input 
                  name="name" 
                  value={name}
                  placeholder="Name"
                  required={true}
                  onChange={this.handleNameChange} />
              </label>
            </p>
          }

          <p>
            <label>
              <input 
                name="email" 
                value={email}
                placeholder="Email"
                required={true}
                onChange={this.handleEmailChange} />
            </label>
          </p>

          <p>
            <label>
              <input 
                name="email" 
                type="password" 
                value={password}
                placeholder="Password"
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

          {error && <p>{error}</p>}

        </form>
      </div>

    );
  }
}

export default AuthPage;


