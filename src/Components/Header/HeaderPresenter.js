import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import urls from 'urls';

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

const LogoButton = styled.button`
  font-size: 2rem;
  font-weight: 700;
  padding: 0.5rem;
  text-transform: uppercase;
`;

const MenuButton = styled.button`
  font-weight: 600;
  font-size: 1rem;
  margin-right: 1rem;
`;

const getMenu = (changePage) => {
  return (
    <React.Fragment>
      <MenuButton onClick={() => changePage(urls.SIGN_UP)}>SignUp</MenuButton>
      <MenuButton onClick={() => changePage(urls.SIGN_IN)}>SignIn</MenuButton>
    </React.Fragment>
  );
};

const HeaderPresenter = ({ changePage }) => {
  return (
    <Container>
      <LogoButton onClick={() => changePage(urls.LANDING)}>Autumn</LogoButton>
      <MenuContainer>{getMenu(changePage)}</MenuContainer>
    </Container>
  );
};

export default HeaderPresenter;

HeaderPresenter.propTypes = {
  changePage: PropTypes.func.isRequired
};
