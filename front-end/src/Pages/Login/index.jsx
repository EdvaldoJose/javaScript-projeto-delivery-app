import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import Input from '../../Components/Input';
import {
  ROUTE,
  ELEMENTEMAIL,
  ELEMENTPASSWORD,
  ELEMENTBTLOGIN,
  ELEMENTBTREGISTER,
  ELEMENTINVALIDEMAIL,
} from '../../dataTesteIds';
import Button from '../../Components/Button';
import Invalid from '../../Components/Invalid';
import {
  userLoginEmail,
  userLoginPassword,
  valideUser, logginSucess, logginFailed } from '../../Redux/actions';

function Login() {
  const { email, password } = useSelector((state) => state.user);
  const {
    disable, message, btnLogin, allowed } = useSelector((state) => state.inLogin);

  const dispatch = useDispatch();
  const history = useHistory();

  const redirect = () => history.push('/register');

  const handleInputChange = ({ target: { value, name } }) => {
    if (name === 'input-email') return dispatch(userLoginEmail(value));
    dispatch(userLoginPassword(value));
  };

  const api = axios.create({
    baseURL: 'http://localhost:3001',
    proxy: false,
  });

  const userLogin = async () => {
    try {
      const response = await api.post('/login', { email, password });
      localStorage.setItem('user', JSON.stringify(response.data));
      dispatch(logginSucess(response.data));
      if (response.data.role === 'administrator') return history.push('/admin/manage');
      if (response.data.role === 'seller') return history.push('/seller/orders');
    } catch ({ response }) {
      dispatch(logginFailed(response.data));
    }
  };

  useEffect(() => {
    const numberLength = 5;
    const testeEmail = /^\S+@\S+\.\S+$/.test(email);
    const validate = (password.length > numberLength && testeEmail);
    if (validate) return dispatch(valideUser(false));
    dispatch(valideUser(true));
  }, [email, password, dispatch]);

  return (
    <>

      <form>
        <Input
          inputName="email"
          type="email"
          name="input-email"
          dataTesteId={ `${ROUTE}__${ELEMENTEMAIL}` }
          value={ email }
          onChange={ handleInputChange }
        />
        <Input
          inputName="password"
          type="password"
          name="input-password"
          dataTesteId={ `${ROUTE}__${ELEMENTPASSWORD}` }
          value={ password }
          onChange={ handleInputChange }
        />
        <Button
          name="Login"
          dataTesteId={ `${ROUTE}__${ELEMENTBTLOGIN}` }
          onclick={ userLogin }
          disabled={ btnLogin }
        />
        <Button
          name="Register"
          dataTesteId={ `${ROUTE}__${ELEMENTBTREGISTER}` }
          onclick={ redirect }
        />
        <Invalid
          dataTesteId={ `${ROUTE}__${ELEMENTINVALIDEMAIL}` }
          message={ message }
          desabilitado={ disable }
        />
      </form>

      {
        allowed && <Redirect to="/customer/products" />
      }
    </>
  );
}

export default Login;
