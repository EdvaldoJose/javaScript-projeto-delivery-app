import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import useProducts from '../../utils/getProducts';
import useCustomerOrders from '../../utils/useCustomerOrders';

function Customer() {
  useCustomerOrders();
  useProducts();
  const { listCustomerOrder } = useSelector((state) => state.customer);

  const date = (itemData) => {
    const data = new Date(itemData);
    const formatedData = `${
      data.getDate().toString().padStart(2, '0')}/${(
      data.getMonth() + 1).toString().padStart(2, '0')}/${data.getFullYear()}`;
    return formatedData;
  };
  return (
    <>
      <NavBar />
      <div>
        {
          listCustomerOrder.map((item, index) => (
            <div key={ index }>
              <Link
                data-testid={ `customer_orders__element-order-id-${item.id}` }
                to={ `/customer/orders/${item.id}` }
              >
                { item.id }
              </Link>
              <div>
                <Link
                  data-testid={ `customer_orders__element-delivery-status-${item.id}` }
                  to={ `/customer/orders/${item.id}` }
                >
                  {item.status}
                </Link>
                <p
                  data-testid={ `customer_orders__element-card-price-${item.id}` }
                >
                  {(item.totalPrice).replace('.', ',')}
                </p>
                <p
                  data-testid={ `customer_orders__element-order-date-${item.id}` }
                >
                  {date(item.saleDate)}
                </p>

              </div>
            </div>))
        }
      </div>
    </>
  );
}

export default Customer;
