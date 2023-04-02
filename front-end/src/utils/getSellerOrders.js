import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getSellerOrders } from '../Redux/actions';

const useSellerOrders = () => {
  const dispatch = useDispatch();
  const { id } = JSON.parse(localStorage.getItem('user') || null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/seller/orders/${id}`);
        dispatch(getSellerOrders(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [dispatch, id]);

  return null;
};

export default useSellerOrders;
