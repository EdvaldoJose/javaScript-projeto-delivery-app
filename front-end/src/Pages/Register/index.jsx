import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Invalid from '../../Components/Invalid';

import {
  ROUTEREGISTER,
  ELEMENTEMAIL,
  ELEMENTPASSWORD,
  ELEMENTNAME,
  ELEMENTBTREGISTER,
  ELEMENTINVALIDREGISTER,
} from '../../dataTesteIds';
import {
  userLoginName,
  valideUser,
  userLoginEmail,
  userLoginPassword,
  cadastrar,
} from '../../Redux/actions';

function Register() {
  const { email, password, name } = useSelector((state) => state.user);
  const { disable, message, btnLogin, allowed } = useSelector((state) => state.inLogin);
  const dispatch = useDispatch();

  const handleChangeName = ({ target: { value } }) => {
    dispatch(userLoginName(value));
  };

  const cadastrarUser = () => {
    const obj = { email, password, name };
    dispatch(cadastrar(obj));
  };

  const handleInputChange = ({ target }) => {
    if (target.name === 'input-email') return dispatch(userLoginEmail(target.value));
    dispatch(userLoginPassword(target.value));
  };

  useEffect(() => {
    const numberLength = 5;
    const numberNameLength = 11;
    const testeEmail = /^\S+@\S+\.\S+$/.test(email);
    const validate = (
      password.length > numberLength && testeEmail && name.length > numberNameLength);
    if (validate) return dispatch(valideUser(false));
    dispatch(valideUser(true));
  }, [name, email, password, dispatch]);

  return (
    <form>
      <Input
        inputName="name"
        type="text"
        name="input-name"
        dataTesteId={ `${ROUTEREGISTER}__${ELEMENTNAME}` }
        value={ name }
        onChange={ handleChangeName }
      />
      <Input
        inputName="email"
        type="email"
        name="input-email"
        dataTesteId={ `${ROUTEREGISTER}__${ELEMENTEMAIL}` }
        value={ email }
        onChange={ handleInputChange }
      />
      <Input
        inputName="password"
        type="password"
        name="input-password"
        dataTesteId={ `${ROUTEREGISTER}__${ELEMENTPASSWORD}` }
        value={ password }
        onChange={ handleInputChange }
      />
      <Button
        name="Cadastrar"
        dataTesteId={ `${ROUTEREGISTER}__${ELEMENTBTREGISTER}` }
        disabled={ btnLogin }
        onclick={ cadastrarUser }
      />
      <Invalid
        dataTesteId={ `${ROUTEREGISTER}__${ELEMENTINVALIDREGISTER}` }
        message={ message }
        desabilitado={ disable }
      />

      {
        allowed && <Redirect to="/customer/products" />
      }
    </form>
  );
}

export default Register;
