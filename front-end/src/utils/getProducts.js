import axios from 'axios';
// import { getProductsList } from '../Redux/actions';

const getProducts = async () => {
  await axios.get('http:/localhost:3001/products')
    .then((data) => console.log(data));
};

export default getProducts;
