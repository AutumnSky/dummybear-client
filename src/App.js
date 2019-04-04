import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reset from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Components/Header';
import Landing from './Components/Landing';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const ComponentsContainer = styled.div`padding-top: 4rem;`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          <ComponentsContainer>
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route component={Landing} />
            </Switch>
          </ComponentsContainer>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
