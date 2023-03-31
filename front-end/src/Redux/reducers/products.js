import { GET_PRODUCTS, ATUALIZA_ITEMS, SUBTOTAL_ITEMS } from '../actions';

const initialState = {
  listProducts: [],
  total: 0,
  btnDisable: true,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_PRODUCTS:
    return {
      ...state,
      listProducts: action.data.map((item) => ({ ...item, quantity: 0 })),
    };
  case ATUALIZA_ITEMS:
    return {
      ...state,
      listProducts: action.array,
    };
  case SUBTOTAL_ITEMS:
    return {
      ...state,
      total: action.result,
      btnDisable: false,
    };
  default:
    return { ...state };
  }
};

export default productsReducer;
