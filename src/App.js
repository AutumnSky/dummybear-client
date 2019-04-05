import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reset from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Components/Header';
import Landing from './Components/Landing';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import urls from 'urls';

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
            <Switch>
              <Route path={urls.LANDING} exact component={Landing} />
              <Route path={urls.SIGN_UP} component={SignUp} />
              <Route path={urls.SIGN_IN} component={SignIn} />
              <Route component={Landing} />
            </Switch>
          </ComponentsContainer>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
