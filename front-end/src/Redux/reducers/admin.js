import {
  NEW_USER_NAME,
  NEW_USER_EMAIL,
  NEW_USER_PASSWORD,
  NEW_USER_ROLE,
  ACTIVATE_BTN,
  GET_LIST_USERS,
  ADD_USER,
} from '../actions';

const initialState = {
  newUser: {
    username: '',
    email: '',
    password: '',
    role: 'customer',
    btnDisable: true,
  },
  listUsers: [],
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
  case GET_LIST_USERS:
    return {
      ...state,
      listUsers: action.value,
    };
  case ADD_USER:
    return {
      ...state,
      listUsers: [...state.listUsers, action.value],
    };
  default:
    return { ...state };
  }
};

export default adminReducer;
