import {
  USER_LOGIN_EMAIL,
  USER_LOGIN_PASSWORD,
  USER_LOGIN_NAME,
  LOGIN_SUCESS,
} from '../actions';

const initialState = {
  name: '',
  email: '',
  password: '',
  role: '',
  token: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case USER_LOGIN_NAME:
    return {
      ...state,
      name: action.name,
    };
  case USER_LOGIN_EMAIL:
    return {
      ...state,
      email: action.email,
    };
  case USER_LOGIN_PASSWORD:
    return {
      ...state,
      password: action.password,
    };
  case LOGIN_SUCESS:
    return {
      ...state,
      token: action.data.token,
      role: action.data.role,
      name: action.data.name,
    };
  default:
    return { ...state };
  }
};

export default userReducer;
