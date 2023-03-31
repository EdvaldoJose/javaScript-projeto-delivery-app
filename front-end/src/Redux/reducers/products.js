import { GET_PRODUCTS } from '../actions';

const initialState = {
  listProducts: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_PRODUCTS:
    return {
      ...state,
      listProducts: action.data.map((item) => ({ ...item, quantity: 0 })),
    };
  default:
    return { ...state };
  }
};

export default productsReducer;
