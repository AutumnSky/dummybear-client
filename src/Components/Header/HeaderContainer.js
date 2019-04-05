import React from 'react';
import HeaderPresenter from './HeaderPresenter';

class HeaderContainer extends React.Component {
  changePage = (page) => {
    this.props.history.push(page);
  };

  render() {
    return <HeaderPresenter changePage={this.changePage} />;
  }
}

export default HeaderContainer;
