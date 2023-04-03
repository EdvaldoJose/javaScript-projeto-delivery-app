import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import useSellerOrders from '../../utils/getSellerOrders';

function SellerOrders() {
  useSellerOrders();
  const history = useHistory();
  const { sellerOrders } = useSelector((state) => state.products);
  return (
    <>
      <NavBar />
      <div>
        {
          sellerOrders.map((item, index) => (
            <div key={ index }>
              <button
                type="button"
                data-testid={ `seller_orders__element-order-id-${item.id}` }
                onClick={ () => history.push(`/seller/orders/${item.id}`) }
              >
                { item.id }
              </button>
              <div>
                <div
                  data-testid={ `seller_orders__element-delivery-status-${item.id}` }
                >
                  {item.status}
                </div>
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
