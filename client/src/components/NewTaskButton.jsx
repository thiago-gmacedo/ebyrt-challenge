import CreateTask from "../server-methods/CreateTask";

const NewTaskButton = (props) => {
  const { name, fetchTasks, setName } = props;
  return (
    <button className="btn bg-green-600 m-2" onClick={ () => { 
      CreateTask(name, fetchTasks);
      setName('')
    }}>Adicionar</button>
  );  
};

export default NewTaskButton;
