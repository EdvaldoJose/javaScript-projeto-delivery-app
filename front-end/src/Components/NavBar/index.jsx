import React from 'react';
import { Link } from 'react-router-dom';
import {
  CUSTOMERFULLNAME,
  CUSTOMERLINKORDERS,
  CUSTOMERLINKPRODUCTS,
  CUSTOMERLOGOUT,
  ROUTEPRODUCTS,
} from '../../dataTesteIds';

function NavBar() {
  return (
    <nav>
      <Link
        to="/customer/products"
        data-testid={ `${ROUTEPRODUCTS}__${CUSTOMERLINKPRODUCTS}` }
      >
        PRODUTOS

      </Link>
      <Link
        to="/orders"
        data-testid={ `${ROUTEPRODUCTS}__${CUSTOMERLINKORDERS}` }
      >
        MEU PEDIDOS

      </Link>
      <p data-testid={ `${ROUTEPRODUCTS}__${CUSTOMERFULLNAME}` }>NOME DA PESSOA</p>
      <Link
        to="/"
        data-testid={ `${ROUTEPRODUCTS}__${CUSTOMERLOGOUT}` }
      >
        SAIR

      </Link>
    </nav>
  );
}

export default NavBar;
