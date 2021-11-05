import axios from 'axios';

const deleteTask = (id, func) => {
  axios.delete(`http://localhost:3000/tarefas/${id}`);
  func()
};

export default deleteTask;
