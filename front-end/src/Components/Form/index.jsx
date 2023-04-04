import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../Input';
import {
  ADMINMANAGE,
  ELEMENTEMAIL,
  ELEMENTNAME,
  ELEMENTPASSWORD,
  ROLESELECT,
  ELEMENTBTREGISTER } from '../../dataTesteIds';
import {
  newUserName,
  newUserEmail,
  newUserPassword,
  newUserRole,
  activateBtn } from '../../Redux/actions';
import Button from '../Button';

function Form() {
  const {
    username,
    email,
    password,
    role,
    btnDisable } = useSelector((state) => state.admin.newUser);
  const dispatch = useDispatch();
  const handleChangeInputs = ({ target: { value, name } }) => {
    if (name === 'input-name') return dispatch(newUserName(value));
    if (name === 'input-email') return dispatch(newUserEmail(value));
    if (name === 'input-password') return dispatch(newUserPassword(value));
    if (name === 'role') return dispatch(newUserRole(value));
  };

  useEffect(() => {
    const inputNameLength = 11;
    const inputPasswordLength = 5;
    const inputEmail = /^\S+@\S+\.\S+$/.test(email);
    const validate = username.length > inputNameLength
    && inputEmail && password.length > inputPasswordLength;
    console.log(validate);
    if (validate) return dispatch(activateBtn(false));
    dispatch(activateBtn(true));
  }, [dispatch, email, password, username]);
  return (
    <form>
      <Input
        inputName="name"
        type="text"
        name="input-name"
        dataTesteId={ `${ADMINMANAGE}${ELEMENTNAME}` }
        value={ username }
        onChange={ handleChangeInputs }
      />
      <Input
        inputName="email"
        type="email"
        name="input-email"
        dataTesteId={ `${ADMINMANAGE}${ELEMENTEMAIL}` }
        value={ email }
        onChange={ handleChangeInputs }
      />
      <Input
        inputName="password"
        type="password"
        name="input-password"
        dataTesteId={ `${ADMINMANAGE}${ELEMENTPASSWORD}` }
        value={ password }
        onChange={ handleChangeInputs }
      />
      <select
        name="role"
        id="role"
        data-testid={ `${ADMINMANAGE}${ROLESELECT}` }
        onChange={ handleChangeInputs }
        defaultValue={ role }
      >
        <option value="seller">Vendedor</option>
        <option value="administrator">Administrador</option>
        <option value="customer">Usuario</option>
      </select>
      <Button
        dataTesteId={ `${ADMINMANAGE}${ELEMENTBTREGISTER}` }
        disabled={ btnDisable }
        name="Cadastrar"
      />
    </form>
  );
}

export default Form;
