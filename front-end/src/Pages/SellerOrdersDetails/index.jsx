import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import { getSales } from '../../Redux/actions';
import getSaleById from '../../utils/getProductsBySale';
import useSellerOrders from '../../utils/getSellerOrders';
import updateSaleStatus from '../../utils/updateSaleStatus';

function SellerOrderDetails() {
  useSellerOrders();
  const { listProducts, sales, sellerOrders } = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();
  const salesorders = sellerOrders.find((item) => item.id === Number(id));
  const date = new Date(salesorders.saleDate);
  const formatedData = `${
    date.getDate().toString().padStart(2, '0')}/${(
    date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;

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
  return (
    <>
      <NavBar />
      <h2>Detalhes do Pedido</h2>
      <div>
        <p
          data-testid="seller_order_details__element-order-details-label-order-id"
        >
          {`Pedido: 000${salesorders.id}`}
        </p>
        <p
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          {`${formatedData}`}
        </p>
        <p
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          {`Status: ${salesorders.status}`}
        </p>
        <button
          onClick={ () => updateSaleStatus('Preparando', id) }
          data-testid="seller_order_details__button-preparing-check"
          type="button"
          disabled={ salesorders.status !== 'Pendente' }
        >
          PREPARAR PEDIDO
        </button>
        <button
          onClick={ () => updateSaleStatus('Em Trânsito', id) }
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
          disabled={ salesorders.status !== 'Preparando' }
        >
          SAIU PARA ENTREGA

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
                    `seller_order_details__element-order-table-item-number-${index}`
                  }
                >
                  {item.id}

                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-name-${index}`
                  }
                >
                  {item.name}

                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-quantity-${index}`
                  }
                >
                  {item.quantity}

                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-unit-price-${index}`
                  }
                >
                  {item.price.replace('.', ',')}

                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-sub-total-${index}`
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
        data-testid="seller_order_details__element-order-total-price"
      >
        {`Total: ${salesorders.totalPrice.replace('.', ',')}`}
      </p>
    </>
  );
}

export default SellerOrderDetails;
