import axios from 'axios';

export const USER_LOGIN_NAME = 'USER_LOGIN_NAME';
export const USER_LOGIN_EMAIL = 'USER_LOGIN_EMAIL';
export const USER_LOGIN_PASSWORD = 'USER_LOGIN_PASSWORD';
export const IN_LOGIN = 'IN_LOGIN';
export const LOGIN_SUCESS = 'LOGIN_SUCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const USER_VALIDATE = 'USER_VALIDATE';

export const userLoginEmail = (email) => ({ type: USER_LOGIN_EMAIL, email });
export const userLoginName = (name) => ({ type: USER_LOGIN_NAME, name });
export const userLoginPassword = (password) => ({ type: USER_LOGIN_PASSWORD, password });
export const loggingIn = () => ({ type: IN_LOGIN });
export const logginSucess = (data) => ({ type: LOGIN_SUCESS, data });
export const logginFailed = ({ message }) => ({ type: LOGIN_FAILED, message });
export const valideUser = (bool) => ({ type: USER_VALIDATE, bool });

export const logar = ({ email, password }) => (dispatch) => {
  dispatch(loggingIn());
  axios.post('http://localhost:3001/login', { email, password })
    .then(({ data }) => dispatch(logginSucess(data)))
    .catch((error) => dispatch(logginFailed(error)));
};
