import axios from 'axios';

const updateSaleStatus = async (status, id) => {
  console.log(status);
  try {
    const response = await axios.put(`http://localhost:3001/sales/${id}`, { status });
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};

export default updateSaleStatus;
