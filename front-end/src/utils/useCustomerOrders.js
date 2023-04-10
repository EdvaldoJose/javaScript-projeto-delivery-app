import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getCustomerOrders } from '../Redux/actions';

const useCustomerOrders = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user')) || null;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/sales/orders/customer/${user.id}`);
        dispatch(getCustomerOrders(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, [dispatch, user.id]);

  return null;
};

export default useCustomerOrders;
