import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getProductsList } from '../Redux/actions';

const useProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        localStorage.setItem('products', JSON.stringify(response.data));
        dispatch(getProductsList(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return null;
};

export default useProducts;
