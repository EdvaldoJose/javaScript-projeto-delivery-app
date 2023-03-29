import { USER_LOGIN } from '../actions';

const initialState = {
  user: {
    email: '',
    password: '',
    role: '',
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case USER_LOGIN:
    return {
      ...state,
      user: { email: action.email, password: action.password },
    };

  default:
    return { ...state };
  }
};

export default userReducer;
