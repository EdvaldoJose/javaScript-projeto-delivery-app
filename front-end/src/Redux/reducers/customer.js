import { GET_CUSTOMER_ORDERS } from '../actions';

const initialState = {
  listCustomerOrder: [],
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_CUSTOMER_ORDERS:
    return {
      ...state,
      listCustomerOrder: action.value,
    };
  default:
    return { ...state };
  }
};

export default customerReducer;
