import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getListUsers } from '../Redux/actions';

const useGetAllUser = (token) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/login/users', { headers: { Authorization: token } });
        dispatch(getListUsers(response.data));
      } catch ({ response }) {
        console.log(response.data);
      }
    };

    fetchUsers();
  }, [dispatch, token]);

  return null;
};

export default useGetAllUser;
