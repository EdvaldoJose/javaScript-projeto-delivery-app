import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

function Rotas() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
    </Switch>
  );
}

export default Rotas;
