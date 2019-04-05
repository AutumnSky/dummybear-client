import React from 'react';
import SignUpPresenter from './SignUpPresenter';

class SignUpContainer extends React.Component {
  handleSignUp = (event) => {
    event.preventDefault();
    console.log('signup');
  };

  render() {
    return <SignUpPresenter handleSignUp={this.handleSignUp} />;
  }
}

export default SignUpContainer;
