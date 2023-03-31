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

// export const logar = ({ email, password }) => async (dispatch) => {
//   dispatch(loggingIn());

//   const response = await fetch('http://localhost:3001/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email, password }),
//   });

//   const data = await response.json();
//   if (data.role) return dispatch(logginSucess(data));
//   dispatch(logginFailed(data));

//   return response;
// };

// export const cadastrar = (obj) => async (dispatch) => {
//   dispatch(loggingIn());

//   const response = await fetch('http://localhost:3001/register', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(obj),
//   });

//   const data = await response.json();
//   if (data.role) return dispatch(logginSucess(data));
//   dispatch(logginFailed(data));

//   console.log(response);
//   return response;
// };
