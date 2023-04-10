import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../Components/NavBar';
import getSaleById from '../../utils/getProductsBySale';
import { getCustomerOrders, getSales } from '../../Redux/actions';
import useGetSellers from '../../utils/getAllSellers';
import useCustomerOrders from '../../utils/useCustomerOrders';
import { CUSTOMERORDER } from '../../dataTesteIds';
import updateSaleStatus from '../../utils/updateSaleStatus';

function CustomerOrderDetails() {
  useCustomerOrders();
  useGetSellers();
  const { listCustomerOrder } = useSelector((state) => state.customer);
  const { listProducts, sales } = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();
  const customerOrder = listCustomerOrder.find((item) => item.id === Number(id));

  useEffect(() => {
    const getProducts = async () => {
      const result = await getSaleById(id);
      const data = listProducts.filter(
        (item) => result.some((resultITem) => resultITem.productId === item.id),
      ).map(
        (product) => ({
          ...product,
          quantity: result.find(
            (resultItem) => resultItem.productId === product.id,
          ).quantity,
        }),
      );
      dispatch(getSales(data));
    };
    getProducts();
  }, [id, listProducts, dispatch]);

  const date = (itemData) => {
    const data = new Date(itemData);
    const formatedData = `${
      data.getDate().toString().padStart(2, '0')}/${(
      data.getMonth() + 1).toString().padStart(2, '0')}/${data.getFullYear()}`;
    return formatedData;
  };

  const attStatusOrder = async (status, saleId) => {
    await updateSaleStatus(status, saleId);

    const response = await axios.get(`http://localhost:3001/sales/orders/customer/${customerOrder.userId}`);
    dispatch(getCustomerOrders(response.data));
  };

  return (
    <>
      <NavBar />
      <h2>Detalhe do Pedido</h2>
      <div>
        <p
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          {`Pedido: 000${customerOrder.id}`}
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          P.Vend: Fulana Pereira
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {date(customerOrder.saleDate)}
        </p>
        <p
          data-testid={ `${CUSTOMERORDER}element-order-details-label-delivery-status` }
        >
          {`${customerOrder.status}`}
        </p>
        <button
          onClick={ () => attStatusOrder('Entregue', id) }
          data-testid="customer_order_details__button-delivery-check"
          type="button"
          disabled={ customerOrder.status !== 'Em Trânsito' }
        >
          MARCAR COMO ENTREGUE
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descricao</th>
            <th>Quantidade</th>
            <th>Valor Unitario</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {
            sales.map((item, index) => (
              <tr key={ index }>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-item-number-${index}`
                  }
                >
                  {item.id}

                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-name-${index}`
                  }
                >
                  {item.name}

                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-quantity-${index}`
                  }
                >
                  {item.quantity}

                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-unit-price-${index}`
                  }
                >
                  {item.price.replace('.', ',')}

                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-sub-total-${index}`
                  }
                >
                  {Number((item.price * item.quantity)
                    .toString().replace(',', '.')).toFixed(2).replace('.', ',')}

                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <p
        data-testid="customer_order_details__element-order-total-price"
      >
        {`Total: ${customerOrder.totalPrice.replace('.', ',')}`}
      </p>
    </>
  );
}

export default CustomerOrderDetails;
