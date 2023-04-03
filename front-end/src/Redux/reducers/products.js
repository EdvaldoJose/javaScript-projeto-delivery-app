import {
  GET_PRODUCTS,
  ATUALIZA_ITEMS,
  SUBTOTAL_ITEMS,
  SELLER_ORDERS,
  SALE_DATA,
} from '../actions';

const initialState = {
  listProducts: [],
  total: 0,
  btnDisable: true,
  sellerOrders: [],
  sales: [],
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
  case SELLER_ORDERS:
    return {
      ...state,
      sellerOrders: action.result,
    };
  case SALE_DATA:
    return {
      ...state,
      sales: action.data,
    };
  default:
    return { ...state };
  }
};

export default productsReducer;
