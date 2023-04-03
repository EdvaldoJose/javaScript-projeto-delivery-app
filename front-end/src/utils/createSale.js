import axios from 'axios';

const createSale = async (body, token) => {
  try {
    const response = await axios.post('http://localhost:3001/sales', body, { headers: { Authorization: token } });
    console.log(response);
    return response.data.id;
  } catch (error) {
    console.log(error.message);
  }
};

export default createSale;
