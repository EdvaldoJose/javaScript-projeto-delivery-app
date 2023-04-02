/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addEndereco,
  addEnderecoNumber,
  atualizaItems,
  selectSeller,
  addSubtotal,
} from '../../Redux/actions';
import NavBar from '../../Components/NavBar';
import Tr from '../../Components/Tr';
import {
  CUSTOMERCHECKOUT,
  CUSTOMERTABLEITEM,
  CUSTOMERITEMNAME,
  ORDERQUANTITY,
  ORDERUNITYPRICE,
  ORDERSUBTOTAL,
  ORDERBUTTONREMOVE,
  ORDERTOTAL,
  ORDERSALE,
  INPUTADDRES,
  FINISHBUTTON,
  INPUTNUMBER,

} from '../../dataTesteIds';

export default function Checkout() {
  const { listProducts, total } = useSelector((state) => state.products);
  const { endereco, endNumber, sellers } = useSelector((state) => state.user);
  const dispatch = useDispatch();

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

  const removeItem = (item) => {
    const itemFind = listProducts.find((bebida) => bebida.id === item.id);
    itemFind.quantity = 0;
    listProducts.splice(itemFind.id - 1, 1, itemFind);
    localStorage.setItem('products', JSON.stringify(listProducts));
    dispatch(atualizaItems(listProducts));
    subtotal();
  };

  const handleVendedor = ({ target: { value } }) => {
    console.log(value);
    dispatch(selectSeller(value));
  };

  const handleId = () => {
    // props.history.push(`/customer/orders/${idVendendor}`);
  };

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'end') return dispatch(addEndereco(value));
    dispatch(addEnderecoNumber(value));
  };

  return (
    <>
      <NavBar />
      <div>

        <h2>Finalizar Pedido</h2>
        <table>
          <thead>
            <Tr />
          </thead>
          <tbody>
            {listProducts.filter((item) => item.quantity > 0).map((item, index) => (
              <tr
                key={ index }
              >
                <td
                  data-testid={ `${CUSTOMERCHECKOUT}${CUSTOMERTABLEITEM}${index}` }
                >
                  {item.id}

                </td>
                <td
                  data-testid={ `${CUSTOMERCHECKOUT}${CUSTOMERITEMNAME}${index}` }
                >
                  {item.name}

                </td>
                <td
                  data-testid={ `${CUSTOMERCHECKOUT}${ORDERQUANTITY}${index}` }
                >
                  {item.quantity}

                </td>
                <td
                  data-testid={ `${CUSTOMERCHECKOUT}${ORDERUNITYPRICE}${index}` }
                >
                  {item.price.replace(/\./, ',')}

                </td>
                <td
                  data-testid={ `${CUSTOMERCHECKOUT}${ORDERSUBTOTAL}${index}` }
                >
                  {Number((item.price * item.quantity)
                    .toString().replace(',', '.')).toFixed(2).replace('.', ',')}

                </td>
                <td
                  data-testid={ `${CUSTOMERCHECKOUT}${ORDERBUTTONREMOVE}${index}` }
                >
                  {' '}
                  <button
                    onClick={ () => removeItem(item) }
                    type="button"
                  >
                    Remover

                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div data-testid={ `${CUSTOMERCHECKOUT}${ORDERTOTAL}` }>
          {total}
        </div>
        <div>
          <h3>Detalhes e Endereço da Entrega</h3>
          <label htmlFor="vendedora">
            P. Vendedora responsável:
            <select
              data-testid={ `${CUSTOMERCHECKOUT}${ORDERSALE}` }
              id="vendedora"
              onClick={ handleVendedor }
            >
              {sellers.map(
                (p, index) => <option key={ index }>{p}</option>,
              )}
            </select>
          </label>
          <label htmlFor="end">
            Endereço

            <input
              onChange={ handleChange }
              data-testid={ `${CUSTOMERCHECKOUT}${INPUTADDRES}` }
              id="end"
              name="end"
              value={ endereco }
            />
          </label>

          <label htmlFor="num">
            Número

            <input
              data-testid={ `${CUSTOMERCHECKOUT}${INPUTNUMBER}` }
              id="num"
              name="num"
              onChange={ handleChange }
              value={ endNumber }
            />
          </label>

          <button
            data-testid={ `${CUSTOMERCHECKOUT}${FINISHBUTTON}` }
            type="button"
            onClick={ () => handleId() }
          >
            Finalizar Pedido

          </button>
        </div>

      </div>
    </>
  );
}
