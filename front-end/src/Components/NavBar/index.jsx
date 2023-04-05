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
  const { role } = JSON.parse(localStorage.getItem('user')) || null;
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
      {
        (role === 'administrator' || role === 'customer')
      && (
        <Link
          to={ role === 'administrator' ? '/admin/manage' : '/customer/products' }
          data-testid={ `${ROUTEPRODUCTS}__${CUSTOMERLINKPRODUCTS}` }
        >
          { role === 'administrator' ? 'Gerenciar Usuarios' : 'Produtos' }
        </Link>
      )
      }
      {
        role !== 'administrator'
        && (
          <Link
            to={ role === 'customer' ? '/customer/orders' : '/seller/orders' }
            data-testid={ `${ROUTEPRODUCTS}__${CUSTOMERLINKORDERS}` }
          >
            { role === 'seller' ? 'Pedidos' : 'Meus Pedidos'}

          </Link>
        )
      }
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
