import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  userLoginEmail, userLoginPassword, logar, valideUser } from '../../Redux/actions';

function Login() {
  const { email, password } = useSelector((state) => state.user);
  const { disable, message, btnLogin } = useSelector((state) => state.inLogin);

  const dispatch = useDispatch();

  const handleInputChange = ({ target: { value, name } }) => {
    if (name === 'input-email') return dispatch(userLoginEmail(value));
    dispatch(userLoginPassword(value));
  };

  const Logar = () => {
    const obj = { email, password };
    dispatch(logar(obj));
  };

  useEffect(() => {
    const numberLength = 5;
    const testeEmail = /^\S+@\S+\.\S+$/.test(email);
    const validate = (password.length > numberLength && testeEmail);
    if (validate) return dispatch(valideUser(false));
    dispatch(valideUser(true));
  }, [email, password, dispatch]);

  return (
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
        onclick={ Logar }
        disabled={ btnLogin }
      />
      <Button
        name="Register"
        dataTesteId={ `${ROUTE}__${ELEMENTBTREGISTER}` }
      />
      <Invalid
        dataTestId={ `${ROUTE}__${ELEMENTINVALIDEMAIL}` }
        message={ message }
        desabilitado={ disable }
      />
    </form>
  );
}

export default Login;
