import React from 'react';
import SignInPresenter from './SignInPresenter';

class SignInContainer extends React.Component {
  handleSignIn = (event) => {
    event.preventDefault();
    console.log('signin');
  };

  render() {
    return <SignInPresenter handleSignIn={this.handleSignIn} />;
  }
}

export default SignInContainer;
