import React from 'react';
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

function Login() {
  return (
    <form>
      <Input
        inputName="email"
        type="email"
        name="input-email"
        dataTesteId={ `${ROUTE}__${ELEMENTEMAIL}` }
      />
      <Input
        inputName="password"
        type="password"
        name="input-password"
        dataTesteId={ `${ROUTE}__${ELEMENTPASSWORD}` }
      />
      <Button
        name="Login"
        dataTesteId={ `${ROUTE}__${ELEMENTBTLOGIN}` }
      />
      <Button
        name="Register"
        dataTesteId={ `${ROUTE}__${ELEMENTBTREGISTER}` }
      />
      <Invalid
        dataTestId={ `${ROUTE}__${ELEMENTINVALIDEMAIL}` }
        message="Erro Login"
        disabled={ false }
      />
    </form>
  );
}

export default Login;
