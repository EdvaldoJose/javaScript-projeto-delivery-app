import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  CUSTOMERFULLNAME,
  CUSTOMERLINKORDERS,
  CUSTOMERLINKPRODUCTS,
  CUSTOMERLOGOUT,
  ROUTEPRODUCTS,
} from '../../dataTesteIds';
import { quitLogin } from '../../Redux/actions';

function NavBar() {
  const history = useHistory();
  const { name } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const quit = () => {
    dispatch(quitLogin());
    localStorage.removeItem('user');
    history.push('/login');
  };
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
      <p data-testid={ `${ROUTEPRODUCTS}__${CUSTOMERFULLNAME}` }>{ name }</p>
      <button
        type="button"
        data-testid={ `${ROUTEPRODUCTS}__${CUSTOMERLOGOUT}` }
        onClick={ quit }
      >
        SAIR

      </button>
    </nav>
  );
}

export default NavBar;
