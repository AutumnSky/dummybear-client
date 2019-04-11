import React from 'react';
import SignInPresenter from './SignInPresenter';
import { connect } from 'react-redux';
import actionCreator from 'Store/actionCreator';
import urls from 'urls';

const mapStateToProps = (state) => {
  return {
    loginUser: state.loginUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(actionCreator.login({ name: 'user1' }, 'tokenstring')),
    requestLogin: (email, password) => dispatch(actionCreator.requestLogin(email, password))
  };
};

class SignInContainer extends React.Component {
  state = {
    loginUser: null
  };

  handleSignIn = (event, email, password) => {
    event.preventDefault();
    // 로그인 dispatch 호출
    this.props.requestLogin(email, password);
  };

  /* case1. 로그인후 페이지 이동: 다음코드는 오류 발생
  static getDerivedStateFromProps(nextProps, prevState) {
    // 로그인이 완료되면 dashboard로 이동
    // (store 업데이트가 되고 loginUser props도 변경되면 getDerivedStateFromProps가 호출됨)
    if (!prevState.loginUser && nextProps.loginUser) {
      // ERROR: TypeError: Cannot read property 'props' of undefined
      this.props.history.push(urls.DASHBOARD);
    }
    return null;
  }
  */

  // case3. 로그인후 페이지 이동
  // ref: https://github.com/reactjs/reactjs.org/issues/721

  // TODO : 로그인시점에 접근할 수 없는 페이지 처리
  // ref: https://medium.com/the-many/adding-login-and-authentication-sections-to-your-react-or-react-native-app-7767fd251bd1
  // refresh해도 로그인이 풀리지 않도록
  componentDidUpdate(prevProps) {
    const { loginUser } = this.props;
    if (loginUser) {
      this.props.history.push(urls.DASHBOARD);
    }
  }

  render() {
    const { loginUser } = this.props;

    /* case2. 로그인후 페이지 이동: 다음코드는 warning 발생
    // index.js:1446 Warning: Cannot update during an existing state transition (such as within `render`).
    // Render methods should be a pure function of props and state.
    if (loginUser) {
      this.props.history.push(urls.DASHBOARD);
    }
    */

    return loginUser ? <div>already logged in</div> : <SignInPresenter handleSignIn={this.handleSignIn} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
