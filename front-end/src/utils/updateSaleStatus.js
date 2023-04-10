import axios from 'axios';

const updateSaleStatus = async (status, id) => {
  try {
    await axios.put(`http://localhost:3001/sales/${id}`, { status });
  } catch (error) {
    console.log(error.message);
  }
};

export default updateSaleStatus;
