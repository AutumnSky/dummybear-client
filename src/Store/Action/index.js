export const ActionNames = {
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGOUT: 'USER_LOGOUT'
};

export const actionCreator = {
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
  }
};
