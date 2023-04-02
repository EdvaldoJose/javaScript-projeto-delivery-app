import React from 'react';
import NavBar from '../../Components/NavBar';
import useSellerOrders from '../../utils/getSellerOrders';

function SellerOrders() {
  useSellerOrders();
  return (
    <NavBar />
  );
}

export default SellerOrders;
