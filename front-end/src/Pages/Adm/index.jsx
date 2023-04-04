import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../Components/Form';
import NavBar from '../../Components/NavBar';
import useGetAllUser from '../../utils/getAllUsers';
import { ADMINMANAGE } from '../../dataTesteIds';
import fetchUsers from '../../utils/updateListUsers';
import deleteUser from '../../utils/deleteUser';
import { getListUsers } from '../../Redux/actions';

function Adm() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user')) || null;
  useGetAllUser(user.token);
  const { listUsers } = useSelector((state) => state.admin);

  const removeUser = async (id) => {
    await deleteUser(id, user.token);
    const newList = await fetchUsers(user.token);
    dispatch(getListUsers(newList));
  };
  return (
    <>
      <NavBar />
      <Form />
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            listUsers.map((item, index) => (
              <tr key={ index }>
                <td
                  data-testid={
                    `${ADMINMANAGE}element-user-table-item-number-${index}`
                  }
                >
                  {item.id}

                </td>
                <td
                  data-testid={
                    `${ADMINMANAGE}element-user-table-name-${index}`
                  }
                >
                  {item.name}

                </td>
                <td
                  data-testid={ `${ADMINMANAGE}element-user-table-email-${index}` }
                >
                  {item.email}

                </td>
                <td
                  data-testid={ `${ADMINMANAGE}element-user-table-role-${index}` }
                >
                  {item.role}

                </td>
                <td>
                  <button
                    type="button"
                    data-testid={ `${ADMINMANAGE}element-user-table-remove-${index}` }
                    onClick={ () => removeUser(item.id) }
                  >
                    Excluir
                  </button>

                </td>
              </tr>

            ))
          }
        </tbody>
      </table>
    </>
  );
}

export default Adm;
