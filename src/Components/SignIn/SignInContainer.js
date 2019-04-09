import React from 'react';
import SignInPresenter from './SignInPresenter';
import { connect } from 'react-redux';
import { actionCreator } from 'Store/Action';

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(actionCreator.login({ name: 'user1' }, 'tokenstring'))
  };
};

class SignInContainer extends React.Component {
  handleSignIn = (event) => {
    event.preventDefault();
    this.props.login();
  };

  render() {
    return <SignInPresenter handleSignIn={this.handleSignIn} />;
  }
}

export default connect(null, mapDispatchToProps)(SignInContainer);
