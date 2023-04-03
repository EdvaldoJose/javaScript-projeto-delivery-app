import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getSellers } from '../Redux/actions';

const useGetSellers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/sales/sellers');
        dispatch(getSellers(response.data || []));
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return null;
};

export default useGetSellers;
