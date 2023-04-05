import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import useProducts from '../../utils/getProducts';
import { ROUTEPRODUCTS } from '../../dataTesteIds';
import { quitLogin, atualizaItems, addSubtotal } from '../../Redux/actions';
import useCustomerOrders from '../../utils/useCustomerOrders';

function Products() {
  useCustomerOrders();
  const { listProducts, total, btnDisable } = useSelector((state) => state.products);
  localStorage.setItem('products', JSON.stringify(listProducts));
  useProducts();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('user')) || { token: '' };
    if (!local.token) {
      history.push('/');
      dispatch(quitLogin());
    }
  }, [history, dispatch]);

  const goToCheckout = () => {
    history.push('/customer/checkout');
  };

  const subtotal = () => {
    const result = listProducts.reduce((acc, curr) => {
      if (curr.quantity > 0) {
        const totalItem = curr.price * curr.quantity;
        acc += totalItem;
      }
      return acc;
    }, 0);
    const string = Number(
      result.toString().replace(',', '.'),
    ).toFixed(2).replace('.', ',');
    dispatch(addSubtotal(string));
  };

  const somar = (item) => {
    const itemFind = listProducts.find((bebida) => bebida.id === item.id);
    itemFind.quantity += 1;
    listProducts.splice(itemFind.id - 1, 1, itemFind);
    localStorage.setItem('products', JSON.stringify(listProducts));
    subtotal();
    dispatch(atualizaItems(listProducts));
  };

  const subtrair = (item) => {
    const itemFind = listProducts.find((bebida) => bebida.id === item.id);
    if (itemFind.quantity > 0) {
      itemFind.quantity -= 1;
    } else {
      itemFind.quantity = 0;
    }
    listProducts.splice(itemFind.id - 1, 1, itemFind);
    localStorage.setItem('products', JSON.stringify(listProducts));
    subtotal();
    dispatch(atualizaItems(listProducts));
  };

  const addValueInput = (item, { target: { value } }) => {
    const itemFind = listProducts.find((bebida) => bebida.id === item.id);
    itemFind.quantity = Number(value);
    listProducts.splice(itemFind.id - 1, 1, itemFind);
    localStorage.setItem('products', JSON.stringify(listProducts));
    subtotal();
    dispatch(atualizaItems(listProducts));
  };

  return (
    <>
      <NavBar />
      {
        listProducts.map((item, index) => (
          <div
            key={ index }
          >
            <p
              data-testid={ `${ROUTEPRODUCTS}__element-card-title-${item.id}` }
            >
              {item.name}

            </p>
            <p
              data-testid={ `${ROUTEPRODUCTS}__element-card-price-${item.id}` }
            >
              {
                item.price.replace(/\./, ',')
              }
            </p>
            <img
              data-testid={ `${ROUTEPRODUCTS}__img-card-bg-image-${item.id}` }
              src={ item.urlImage }
              alt={ item.name }
              width="258px"
              height="258px"
            />
            <button
              type="button"
              data-testid={ `${ROUTEPRODUCTS}__button-card-rm-item-${item.id}` }
              onClick={ () => subtrair(item) }
            >
              -

            </button>
            <input
              type="text"
              data-testid={ `${ROUTEPRODUCTS}__input-card-quantity-${item.id}` }
              onChange={ (event) => addValueInput(item, event) }
              value={ item.quantity }
            />
            <button
              type="button"
              data-testid={ `${ROUTEPRODUCTS}__button-card-add-item-${item.id}` }
              onClick={ () => somar(item) }
            >
              +

            </button>
          </div>
        ))
      }
      <button
        type="button"
        data-testid={ `${ROUTEPRODUCTS}__button-cart` }
        disabled={ btnDisable }
        onClick={ goToCheckout }
      >
        Ver Carrinho: R$
        <p
          data-testid={ `${ROUTEPRODUCTS}__checkout-bottom-value` }
        >
          {`${total}`}

        </p>
      </button>
    </>
  );
}

export default Products;
