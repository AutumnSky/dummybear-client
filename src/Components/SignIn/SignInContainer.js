import React from 'react';
import SignInPresenter from './SignInPresenter';
import { connect } from 'react-redux';
import actionCreator from 'Store/actionCreator';

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(actionCreator.login({ name: 'user1' }, 'tokenstring')),
    requestLogin: (email, password) => dispatch(actionCreator.requestLogin(email, password))
  };
};

class SignInContainer extends React.Component {
  handleSignIn = (event) => {
    event.preventDefault();
    this.props.requestLogin('saga email', 'saga pw');
  };

  render() {
    return <SignInPresenter handleSignIn={this.handleSignIn} />;
  }
}

export default connect(null, mapDispatchToProps)(SignInContainer);
