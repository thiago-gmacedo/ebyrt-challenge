import axios from 'axios';

const DeleteTask = (id, func) => {
  axios.delete(`http://localhost:3000/tarefas/${id}`);
  func();
};

export default DeleteTask;
