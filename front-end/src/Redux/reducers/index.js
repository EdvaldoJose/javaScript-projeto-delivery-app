import { combineReducers } from 'redux';
import loginReducer from './inLogin';
import userReducer from './user';
import productsReducer from './products';

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  inLogin: loginReducer,
});

export default rootReducer;
