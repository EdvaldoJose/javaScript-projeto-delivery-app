import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Products from '../Pages/Products';
import Checkout from '../Pages/Checkout/checkout';
import SellerOrders from '../Pages/SellerOrders';
import Customer from '../Pages/Customer';
import SellerOrderDetails from '../Pages/SellerOrdersDetails';
import Adm from '../Pages/Adm';
import CustomerOrderDetails from '../Pages/CustomerOrderDetails';

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
      <Route exact path="/customer/orders/:id" component={ CustomerOrderDetails } />
      <Route exact path="/seller/orders/:id" component={ SellerOrderDetails } />
      <Route path="/customer/orders" component={ Customer } />
      <Route path="/customer/checkout" component={ Checkout } />
      <Route exact path="/seller/orders" component={ SellerOrders } />
      <Route path="/admin/manage" component={ Adm } />
    </Switch>
  );
}

export default Rotas;
