import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reset from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';
import EnsureLoggedInContainer from './EnsureLoggedInContainer';
import Header from './Components/Header';
import Landing from './Components/Landing';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Dashboard from './Components/Dashboard';
import MyPage from './Components/MyPage';
import NotFound from './Components/NotFound';
import urls from 'urls';
import MySwitch from './MySwitch';

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
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <ComponentsContainer>
            <MySwitch>
              <Route path={urls.LANDING} exact component={Landing} />
              <Route path={urls.SIGN_UP} component={SignUp} />
              <Route path={urls.SIGN_IN} component={SignIn} />
              <EnsureLoggedInContainer>
                <Route path={urls.DASHBOARD} component={Dashboard} />
                <Route path={urls.MYPAGE} component={MyPage} />
              </EnsureLoggedInContainer>
              <Route component={NotFound} />
            </MySwitch>
          </ComponentsContainer>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
