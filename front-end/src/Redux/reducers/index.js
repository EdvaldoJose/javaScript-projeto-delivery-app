import { combineReducers } from 'redux';
import loginReducer from './inLogin';
import userReducer from './user';
import productsReducer from './products';
import adminReducer from './admin';

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  inLogin: loginReducer,
  admin: adminReducer,
});

export default rootReducer;
