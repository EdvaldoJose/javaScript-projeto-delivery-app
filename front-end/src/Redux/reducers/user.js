import {
  USER_LOGIN_EMAIL,
  USER_LOGIN_PASSWORD,
  LOGIN_SUCESS,
  LOGIN_FAILED,
  IN_LOGIN,
  USER_VALIDATE,
} from '../actions';

const initialState = {
  user: {
    email: '',
    password: '',
    role: '',
  },
  inLogin: {
    allowed: false,
    loggingIn: false,
    disable: false,
    message: '',
    btnLogin: true,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case USER_LOGIN_EMAIL:
    return {
      ...state,
      user: { ...state.user, email: action.email },
    };
  case USER_LOGIN_PASSWORD:
    return {
      ...state,
      user: { ...state.user, password: action.password },
    };

  case IN_LOGIN:
    return {
      ...state,
      inLogin: { ...state.inLogin, loggingIn: state.inLogin.loggingIn },
    };

  case LOGIN_SUCESS:
    return {
      ...state,
      inLogin: {
        ...state.inLogin,
        loggingIn: false,
        allowed: true,
        disable: false,
      },
      user: {
        ...state,
        role: action.data.role,
      },
    };

  case LOGIN_FAILED:
    return {
      ...state,
      inLogin: {
        ...state.inLogin,
        disable: true,
        message: action.message,
      },
    };
  case USER_VALIDATE:
    return {
      ...state,
      inLogin: {
        ...state,
        btnLogin: false,
      },
    };

  default:
    return { ...state };
  }
};

export default userReducer;
