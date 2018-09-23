import React from 'react';
import { connect } from 'react-redux';

class LoginPageComponent extends React.Component {
  handleClick = (event) => {
    if (event.target.value === 123) {
      this.props.authUser('art');
    }
  };
  render() {
    return (
      <div className="Login">
        <h3>Login</h3>
        <input type="text" />
        <input type="password" />
        <button type="button" onClick={this.handleClick} >
          login
        </button>
      </div>
    );
  }
}

export const LoginPage = connect(null, dispatch => ({
  authUser: (user) => dispatch({type: '', payload: user})
}))(LoginPageComponent);