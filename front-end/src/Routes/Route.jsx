import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Products from '../Pages/Products';
import Checkout from '../Pages/Checkout/checkout';
import SellerOrders from '../Pages/SellerOrders';
import Customer from '../Pages/Customer';

function Rotas() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ Products } />

      {/* Tela pessoa vendedora */}
      <Route path="/seller/orders" component={ SellerOrders } />
      <Route path="/customer/checkout" component={ Checkout } />
      <Route path="/customer/orders/:id" component={ Customer } />
    </Switch>
  );
}

export default Rotas;
