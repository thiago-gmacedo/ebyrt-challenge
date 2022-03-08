import React from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';
import NewTask from '../components/NewTask';
import '../style/styles.css'

const Home = () => {
  const [tasks, setTasks] = React.useState([]);
  const [name, setName] = React.useState('');

  const fetchTasks = () => {
    axios
      .get('http://localhost:3001/tarefas')
      .then(res => setTasks(res.data));
  };
    
  React.useEffect(() => {
    fetchTasks();
  }, []);
  
  if (!tasks) return <div>Carregando...</div>;
  return (
    <body className='h-screen bg-yellow-100'>
      <div className='mx-auto p-3'>
        <h1 className='text-center'>Tarefatron 2006</h1>
        <TaskList tasks={ tasks } fetchTasks={ fetchTasks }/>
        <NewTask name={ name } setName={ setName } fetchTasks={ fetchTasks}/>
      </div>
    </body>
    );
};

export default Home;
