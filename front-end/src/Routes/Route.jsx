import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Products from '../Pages/Products';
import Checkout from '../Pages/Checkout/checkout';
import SellerOrders from '../Pages/SellerOrders';

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
    </Switch>
  );
}

export default Rotas;
