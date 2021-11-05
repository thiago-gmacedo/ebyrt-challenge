import axios from 'axios';

const CreateTask = async (name, func) => {
  await axios.post('http://localhost:3000/tarefas', {
    name,
    status: 0
  });
  func();
};

export default CreateTask;
