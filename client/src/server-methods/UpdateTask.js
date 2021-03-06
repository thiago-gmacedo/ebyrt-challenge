import axios from 'axios';

const UpdateTask = async (name, status, func, id) => {
  await axios.put(`http://localhost:3001/tarefas/${id}`, { name, status });
  func();
};

export default UpdateTask;
