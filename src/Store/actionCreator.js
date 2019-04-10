import { ActionNames } from './constants';

export default {
  requestLogin: function(email, password) {
    return {
      type: ActionNames.REQUEST_USER_LOGIN,
      payload: { email, password }
    };
  },
  login: function(loginUser, token) {
    return {
      type: ActionNames.USER_LOGIN,
      payload: { token, loginUser }
    };
  },
  logout: function() {
    return {
      type: ActionNames.USER_LOGOUT
    };
  },
  error: function(error) {
    return {
      type: ActionNames.ERROR_COMMON,
      payload: error
    };
  }
};
