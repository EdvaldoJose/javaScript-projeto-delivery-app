/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { atualizaItems } from '../../Redux/actions';
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

  const [setIdVendedor] = useState();

  const dispatch = useDispatch();

  const mockSalesman = [
    {
      id: 1,
      nome: 'Fulana Pereira',
    },
  ];

  const removeItem = (item) => {
    const itemFind = listProducts.find((bebida) => bebida.id === item.id);
    // console.log(item);
    console.log(itemFind);
    itemFind.quantity = 0;
    listProducts.splice(itemFind.id - 1, 1, itemFind);
    dispatch(atualizaItems(listProducts));
  };

  const handleId = () => {
    // props.history.push(`/customer/orders/${idVendendor}`);
  };

  const handleVendedor = ({ target }) => {
    setIdVendedor(target.value);
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
                  {item.price}

                </td>
                <td
                  data-testid={ `${CUSTOMERCHECKOUT}${ORDERSUBTOTAL}${index}` }
                >
                  {item.price * item.quantity}

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
          </label>
          <select
            data-testid={ `${CUSTOMERCHECKOUT}${ORDERSALE}` }
            onClick={ (elemento) => handleVendedor(elemento) }
            id="vendedora"
          >
            {mockSalesman.map(
              (p) => <option key={ p.id } value={ p.id }>{p.nome}</option>,
            )}
          </select>
          <label htmlFor="end">Endereço</label>

          <input
            data-testid={ `${CUSTOMERCHECKOUT}${INPUTADDRES}` }
            id="end"
            placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
          />
          <label htmlFor="num">Número</label>

          <input
            data-testid={ `${CUSTOMERCHECKOUT}${INPUTNUMBER}` }
            id="num"
            placeholder="198"
          />
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
