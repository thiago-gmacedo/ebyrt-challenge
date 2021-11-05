import deleteTask from "../server-methods/DeleteTask";

const DeleteButton = (props) => {
  const { id, fetchTasks } = props;
  return (
    <button onClick={ () => deleteTask(id, fetchTasks) }>Apagar</button>
  );
};

export default DeleteButton;
