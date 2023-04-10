import axios from 'axios';

const getSaleById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3001/sales/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export default getSaleById;
