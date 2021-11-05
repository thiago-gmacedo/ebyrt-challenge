import React from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';

const Home = () => {
  const [tasks, setTasks] = React.useState([]);

  const fetchTasks = () => {
    axios
      .get('http://localhost:3000/tarefas')
      .then(res => setTasks(res.data));
  }
    
  React.useEffect(() => {
    fetchTasks();
  }, []);
  
  if (!tasks) return <div>Carregando...</div>;
  return (
    <>
      <h1>Tarefatron 2006</h1>
      <TaskList tasks={ tasks } fetchTasks={ fetchTasks }/>
    </>
    );
};

export default Home;
