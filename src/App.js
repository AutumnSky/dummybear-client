import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reset from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';
import { connect } from 'react-redux';
import Header from './Components/Header';
import Landing from './Components/Landing';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import DashBoard from './Components/DashBoard';
import MyPage from './Components/MyPage';
import AntDesign from './Components/AntDesign';
import ErrorNotFound from './Components/ErrorNotFound';
import urls from 'urls';
import actionCreator from 'Store/actionCreator';

const mapStateToProps = (state) => {
  return {
    loginUser: state.loginUser,
    token: state.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAutoLogin: (token) => dispatch(actionCreator.requestAutoLogin(token))
  };
};

const GlobalStyle = createGlobalStyle`
  ${reset}
  button {
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }

  input {
    &:focus {
      outline: none;
    }
  }
`;

const ComponentsContainer = styled.div`padding-top: 4.7rem;`;

class App extends Component {
  componentDidMount() {
    // auto login
    const { token } = this.props;
    if (!token) {
      const token = sessionStorage.getItem('token');
      if (token) {
        console.log('do auto login');
        this.props.requestAutoLogin(token);
      }
    }
  }

  componentDidUpdate(prevProps) {
    const { token, loginUser } = this.props;
    if (token && loginUser) {
      sessionStorage.setItem('token', token);
    } else if (!token && !loginUser) {
      sessionStorage.clear();
    }
  }

  checkLogIn = (component) => {
    if (this.props.loginUser) {
      return component;
    } else {
      return <SignIn />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <ComponentsContainer>
            <Switch>
              <Route path={urls.LANDING} exact component={Landing} />
              <Route path={urls.SIGN_UP} component={SignUp} />
              <Route path={urls.SIGN_IN} component={SignIn} />
              <Route path={urls.ANT_DESIGN} component={AntDesign} />
              <Route path={urls.DASHBOARD} render={() => this.checkLogIn(<DashBoard />)} />
              <Route path={urls.MYPAGE} render={() => this.checkLogIn(<MyPage />)} />
              <Route component={ErrorNotFound} />
            </Switch>
          </ComponentsContainer>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
