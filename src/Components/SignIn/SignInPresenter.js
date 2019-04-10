import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
`;

const SignUpBox = styled.div`
  min-width: 300px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 1.3rem;
  margin-bottom: 30px;
`;

const Label = styled.label`
  font-size: 0.8rem;
  margin-bottom: 5px;
  margin-left: 5px;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
  border-radius: 10px;
  border: 1px solid gray;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 10px;
  text-transform: uppercase;
`;

const emailInput = React.createRef();
const passwordInput = React.createRef();

const SignInPresenter = ({ handleSignIn }) => (
  <Container>
    <form>
      <SignUpBox>
        <Title>Sign In</Title>

        <Label htmlFor="email">Email</Label>
        <Input id="email" type="text" placeholder="email" ref={emailInput} />
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="password" ref={passwordInput} />
        <Button onClick={(e) => handleSignIn(e, emailInput.current.value, passwordInput.current.value)}>Confirm</Button>
      </SignUpBox>
    </form>
  </Container>
);

export default SignInPresenter;

SignInPresenter.prototype = {
  handleSignIn: PropTypes.func.isRequired
};
