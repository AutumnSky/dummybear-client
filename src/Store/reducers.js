import { ActionNames } from './constants';

const initialState = {
  loginUser: null,
  token: null
};

function reducer(state = initialState, action) {
  let newState = { ...state };
  let { type, payload } = action;

  switch (type) {
    case ActionNames.USER_LOGIN: {
      console.log('login', payload);
      newState.loginUser = payload.loginUser;
      newState.token = payload.token;
      break;
    }
    case ActionNames.USER_LOGOUT: {
      newState.loginUser = null;
      newState.token = null;
      break;
    }
    default: {
      break;
    }
  }
  return newState;
}

export default reducer;
