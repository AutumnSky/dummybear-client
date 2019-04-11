import React from 'react';
import { connect } from 'react-redux';
import withRouteValidator from './RouteValidator';
// import { withRouter } from 'react-router-dom';
import store from 'Store/store';

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    loginUser: state.loginUser
    // currentURL: ownProps.location.pathname
  };
};

// ref:
// https://medium.com/the-many/adding-login-and-authentication-sections-to-your-react-or-react-native-app-7767fd251bd1
// https://medium.com/@lonesword_/authentication-with-react-router-4-x-5b377e5e05d1
class EnsureLoggedInContainer extends React.Component {
  isRouteValid() {
    // const { loginUser } = this.props;
    // return loginUser ? true : false;
    const aa = store.getState().loginUser ? true : false;
    console.log('asdf', aa);
    return aa;
  }

  componentDidMount() {
    console.log('this.props', this.props);
    // const {loginUser} = this.props;
    // if (!loginUser) {

    // }
  }

  render() {
    console.log('this,child', this.props.children);
    return this.props.children;
  }
}

export default withRouteValidator(connect(mapStateToProps, null)(EnsureLoggedInContainer));
