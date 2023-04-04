import {
  NEW_USER_NAME,
  NEW_USER_EMAIL,
  NEW_USER_PASSWORD,
  NEW_USER_ROLE,
  ACTIVATE_BTN,
} from '../actions';

const initialState = {
  newUser: {
    username: '',
    email: '',
    password: '',
    role: 'customer',
    btnDisable: true,
  },
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
  case NEW_USER_NAME:
    return {
      ...state,
      newUser: { ...state.newUser, username: action.value },
    };
  case NEW_USER_EMAIL:
    return {
      ...state,
      newUser: { ...state.newUser, email: action.value },
    };
  case NEW_USER_PASSWORD:
    return {
      ...state,
      newUser: { ...state.newUser, password: action.value },
    };
  case NEW_USER_ROLE:
    return {
      ...state,
      newUser: { ...state.newUser, role: action.value },
    };
  case ACTIVATE_BTN:
    return {
      ...state,
      newUser: { ...state.newUser, btnDisable: action.value },
    };
  default:
    return { ...state };
  }
};

export default adminReducer;
