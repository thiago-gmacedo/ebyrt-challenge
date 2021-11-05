import CreateTask from "../server-methods/CreateTask";

const NewTaskButton = (props) => {
  const { name, fetchTasks } = props;
  return (
    <button onClick={ () => { CreateTask(name, fetchTasks) }}>Adicionar tarefa</button>
  );  
};

export default NewTaskButton;
