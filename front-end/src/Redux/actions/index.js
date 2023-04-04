export const USER_LOGIN_NAME = 'USER_LOGIN_NAME';
export const USER_LOGIN_EMAIL = 'USER_LOGIN_EMAIL';
export const USER_LOGIN_PASSWORD = 'USER_LOGIN_PASSWORD';
export const IN_LOGIN = 'IN_LOGIN';
export const RETURN_LOGIN = 'RETURN_LOGIN';
export const LOGIN_SUCESS = 'LOGIN_SUCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const USER_VALIDATE = 'USER_VALIDATE';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ATUALIZA_ITEMS = 'ATUALIZA_ITEMS';
export const SUBTOTAL_ITEMS = 'SUBTOTAL_ITEMS';
export const ENDERECO_CLIENT = 'ENDERECO_CLIENT';
export const ENDERECO_NUMBER = 'ENDERECO_NUMBER';
export const GET_SELLERS = 'GET_SELLERS';
export const SELECT_SELLER = 'SELECT_SELLER';
export const SELLER_ORDERS = 'SELLER_ORDERS';
export const SALE_DATA = 'SALE_DATA';
export const NEW_USER_NAME = 'NEW_USER_NAME';
export const NEW_USER_EMAIL = 'NEW_USER_EMAIL';
export const NEW_USER_PASSWORD = 'NEW_USER_PASSWORD';
export const NEW_USER_ROLE = 'NEW_USER_ROLE';
export const ACTIVATE_BTN = 'ACTIVATE_BTN';
export const GET_LIST_USERS = 'GET_LIST_USERS';
export const ADD_USER = 'ADD_USER';

export const userLoginEmail = (email) => ({ type: USER_LOGIN_EMAIL, email });
export const userLoginName = (name) => ({ type: USER_LOGIN_NAME, name });
export const userLoginPassword = (password) => ({ type: USER_LOGIN_PASSWORD, password });
export const loggingIn = () => ({ type: IN_LOGIN });
export const logginSucess = (data) => ({ type: LOGIN_SUCESS, data });
export const logginFailed = ({ message }) => ({ type: LOGIN_FAILED, message });
export const valideUser = (bool) => ({ type: USER_VALIDATE, bool });
export const getProductsList = (data) => ({ type: GET_PRODUCTS, data });
export const quitLogin = () => ({ type: RETURN_LOGIN });
export const atualizaItems = (array) => ({ type: ATUALIZA_ITEMS, array });
export const addSubtotal = (result) => ({ type: SUBTOTAL_ITEMS, result });
export const addEndereco = (end) => ({ type: ENDERECO_CLIENT, end });
export const addEnderecoNumber = (number) => ({ type: ENDERECO_NUMBER, number });
export const getSellers = (data) => ({ type: GET_SELLERS, data });
export const selectSeller = (value) => ({ type: SELECT_SELLER, value });
export const getSellerOrders = (result) => ({ type: SELLER_ORDERS, result });
export const getSales = (data) => ({ type: SALE_DATA, data });
export const newUserName = (value) => ({ type: NEW_USER_NAME, value });
export const newUserEmail = (value) => ({ type: NEW_USER_EMAIL, value });
export const newUserPassword = (value) => ({ type: NEW_USER_PASSWORD, value });
export const newUserRole = (value) => ({ type: NEW_USER_ROLE, value });
export const activateBtn = (value) => ({ type: ACTIVATE_BTN, value });
export const getListUsers = (value) => ({ type: GET_LIST_USERS, value });
export const addNewUser = (value) => ({ type: ADD_USER, value });
