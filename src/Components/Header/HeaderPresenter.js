import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid black;
`;

const MenuContainer = styled.div``;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  padding: 0.5rem;
  text-transform: uppercase;
`;

const Menu = styled.button`
  font-weight: 600;
  border: none;
  font-size: 1rem;
  margin-left: 1rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

class HeaderPresenter extends React.Component {
  handleSignUp = () => {
    alert('signup');
  };

  handleSignIn = () => {
    alert('signin');
  };

  getMenu = () => {
    return (
      <React.Fragment>
        <Menu onClick={this.handleSignUp}>SignUp</Menu>
        <Menu onClick={this.handleSignIn}>SignIn</Menu>
      </React.Fragment>
    );
  };

  render() {
    return (
      <Container>
        <Logo>Autumn</Logo>
        <MenuContainer>{this.getMenu()}</MenuContainer>
      </Container>
    );
  }
}

export default HeaderPresenter;
