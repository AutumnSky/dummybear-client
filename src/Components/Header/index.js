import React from 'react';
import styled from 'styled-components';
import urls from 'urls';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import actionCreator from 'Store/actionCreator';

const mapStateToProps = (state) => {
  return { loginUser: state.loginUser };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actionCreator.logout())
  };
};

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

class Header extends React.Component {
  handleChangePage = (page) => {
    this.props.history.push(page);
  };

  handleLogOut = () => {
    this.props.logout();
  };

  getMenu = () => {
    const { loginUser } = this.props;

    return !loginUser ? (
      // menu for logout
      <React.Fragment>
        <MenuButton onClick={() => this.handleChangePage(urls.SIGN_UP)}>SignUp</MenuButton>
        <MenuButton onClick={() => this.handleChangePage(urls.SIGN_IN)}>SignIn</MenuButton>
      </React.Fragment>
    ) : (
      // menu for login
      <React.Fragment>
        <MenuButton onClick={() => this.handleChangePage(urls.DASHBOARD)}>Dashboard</MenuButton>
        <MenuButton onClick={() => this.handleChangePage(urls.MYPAGE)}>MyPage</MenuButton>
        <MenuButton onClick={() => this.handleLogOut()}>LogOut</MenuButton>
      </React.Fragment>
    );
  };

  render() {
    return (
      <Container>
        <LogoButton onClick={() => this.handleChangePage(urls.LANDING)}>Autumn</LogoButton>
        <MenuContainer>{this.getMenu()}</MenuContainer>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
