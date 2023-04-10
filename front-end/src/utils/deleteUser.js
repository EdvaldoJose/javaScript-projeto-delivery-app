import axios from 'axios';

const deleteUser = async (id, token) => {
  try {
    await axios.delete(`http://localhost:3001/login/users/${id}`, { headers: { Authorization: token } });
  } catch (error) {
    console.log(error);
  }
};

export default deleteUser;
