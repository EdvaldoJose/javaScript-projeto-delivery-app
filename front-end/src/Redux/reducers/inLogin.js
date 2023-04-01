import {
  IN_LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCESS,
  USER_VALIDATE,
  RETURN_LOGIN,
} from '../actions';

const initialState = {
  allowed: false,
  loggingIn: false,
  disable: false,
  message: '',
  btnLogin: true,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
  case IN_LOGIN:
    return {
      ...state,
      loggingIn: state.inLogin.loggingIn,
    };

  case LOGIN_SUCESS:
    return {
      ...state,
      loggingIn: false,
      allowed: true,
      disable: false,
    };

  case LOGIN_FAILED:
    return {
      ...state,
      disable: true,
      message: action.message,
    };
  case USER_VALIDATE:
    return {
      ...state,
      btnLogin: action.bool,
    };
  case RETURN_LOGIN:
    return {
      ...state,
      allowed: true,
    };
  default:
    return { ...state };
  }
};

export default loginReducer;
