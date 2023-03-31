import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import useProducts from '../../utils/getProducts';
import { ROUTEPRODUCTS } from '../../dataTesteIds';

function Products() {
  const { listProducts } = useSelector((state) => state.products);
  useProducts();
  const history = useHistory();

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('user')) || { token: '' };
    if (!local.token) {
      history.push('/');
    }
  }, []);

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
              {item.price}

            </p>
            <img
              data-testid={ `${ROUTEPRODUCTS}__img-card-bg-image-${item.id}` }
              src={ item.url_image }
              alt={ item.name }
              width="258px"
              height="258px"
            />
            <button
              type="button"
              data-testid={ `${ROUTEPRODUCTS}__button-card-rm-item-${item.id}` }
            >
              -

            </button>
            <input
              data-testid={ `${ROUTEPRODUCTS}__input-card-quantity-${item.id}` }
              defaultValue={ item.quantity }
            />
            <button
              type="button"
              data-testid={ `${ROUTEPRODUCTS}__button-card-add-item-${item.id}` }
            >
              +

            </button>
          </div>
        ))
      }
    </>
  );
}

export default Products;
