import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import useProducts from '../../utils/getProducts';
import useSellerOrders from '../../utils/getSellerOrders';

function SellerOrders() {
  useSellerOrders();
  useProducts();
  const { sellerOrders } = useSelector((state) => state.products);

  return (
    <>
      <NavBar />
      <div>
        {
          sellerOrders.map((item, index) => (
            <div key={ index }>
              <Link
                data-testid={ `seller_orders__element-order-id-${item.id}` }
                to={ `/seller/orders/${item.id}` }
              >
                { item.id }
              </Link>
              <div>
                <Link
                  data-testid={ `seller_orders__element-delivery-status-${item.id}` }
                  to={ `/seller/orders/${item.id}` }
                >
                  {item.status}
                </Link>
                <p
                  data-testid={ `seller_orders__element-card-address-${item.id}` }
                >
                  {`${item.deliveryAddress}, ${item.deliveryNumber}`}
                </p>
                <p
                  data-testid={ `seller_orders__element-card-price-${item.id}` }
                >
                  {(item.totalPrice).replace('.', ',')}
                </p>
                <p
                  data-testid={ `seller_orders__element-order-date-${item.id}` }
                >
                  {item.saleDate}
                </p>

              </div>
            </div>))
        }
      </div>
    </>
  );
}

export default SellerOrders;
