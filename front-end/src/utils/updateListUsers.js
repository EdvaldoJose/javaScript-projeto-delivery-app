import axios from 'axios';

const fetchUsers = async (token) => {
  try {
    const response = await axios.get('http://localhost:3001/login/users', { headers: { Authorization: token } });
    return response.data;
  } catch (erro) {
    console.log(erro);
  }
};

export default fetchUsers;
