import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from '../Pages/Login';

function Rotas() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default Rotas;
