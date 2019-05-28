import React from 'react';
import PropTypes from 'prop-types';
import './css.css';

class Login extends React.Component {

  state = {
    username: '',
    password: '',
  }

  auth = () => {
    this.props.login(this.state.username, this.state.password);
  }

  onNameChange = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onPassChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  render() {

    return (
      <div className='loginContainer'>
        <div className='loginForm'>
          <input
            ref='username'
            className='credInput'
            type='text'
            placeholder='Username'
            onChange={this.onNameChange}
          />
          <input
            ref='pass'
            className='credInput'
            type='password'
            placeholder='Password'
            onChange={this.onPassChange}
          />
          <button onClick={this.auth} className='loginButton'> Login </button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
}

export default Login;
