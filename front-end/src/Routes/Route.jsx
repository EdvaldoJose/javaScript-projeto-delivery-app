import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Products from '../Pages/Products';
import Checkout from '../Pages/Checkout/checkout';
import SellerOrders from '../Pages/SellerOrders';
import Customer from '../Pages/Customer';
import SellerOrderDetails from '../Pages/SellerOrdersDetails';

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
      <Route exact path="/seller/orders/:id" component={ SellerOrderDetails } />
      <Route exact path="/customer/orders/:id" component={ Customer } />
      <Route path="/customer/checkout" component={ Checkout } />
      <Route exact path="/seller/orders" component={ SellerOrders } />
    </Switch>
  );
}

export default Rotas;
