import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Invalid from '../../Components/Invalid';

import {
  ROUTEREGISTER,
  ELEMENTEMAIL,
  ELEMENTPASSWORD,
  ELEMENTNAME,
  ELEMENTBTREGISTER,
  ELEMENTINVALIDEMAIL,
} from '../../dataTesteIds';
import {
  userLoginName,
  valideUser,
  userLoginEmail,
  userLoginPassword } from '../../Redux/actions';

function Register() {
  const { email, password, name } = useSelector((state) => state.user);
  const { disable, message, btnLogin } = useSelector((state) => state.inLogin);
  const dispatch = useDispatch();

  const handleChangeName = ({ target: { value } }) => {
    dispatch(userLoginName(value));
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
      />
      <Invalid
        dataTesteId={ `${ROUTEREGISTER}__${ELEMENTINVALIDEMAIL}` }
        message={ message }
        desabilitado={ disable }
      />
    </form>
  );
}

export default Register;
