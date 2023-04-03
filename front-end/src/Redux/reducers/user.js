import {
  USER_LOGIN_EMAIL,
  USER_LOGIN_PASSWORD,
  USER_LOGIN_NAME,
  LOGIN_SUCESS,
  ENDERECO_CLIENT,
  ENDERECO_NUMBER,
  GET_SELLERS,
  SELECT_SELLER,
} from '../actions';

const initialState = {
  name: '',
  email: '',
  password: '',
  role: '',
  token: '',
  endereco: '',
  endNumber: '',
  sellers: ['Fulana', 'Ciclano', 'Beltrano'],
  seller: 'Fulana Pereira',
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
  case ENDERECO_CLIENT:
    return {
      ...state,
      endereco: action.end,
    };
  case ENDERECO_NUMBER:
    return {
      ...state,
      endNumber: action.number,
    };
  case GET_SELLERS:
    return {
      ...state,
      sellers: action.data,
    };
  case SELECT_SELLER:
    return {
      ...state,
      seller: action.value,
    };
  default:
    return { ...state };
  }
};

export default userReducer;
