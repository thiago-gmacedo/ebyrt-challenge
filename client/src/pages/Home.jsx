import React from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';
import NewTask from '../components/NewTask';
import '../style/Home.css'

const Home = () => {
  const [tasks, setTasks] = React.useState([]);
  const [name, setName] = React.useState('');

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
      <NewTask name={ name } setName={ setName } fetchTasks={ fetchTasks}/>
    </>
    );
};

export default Home;
