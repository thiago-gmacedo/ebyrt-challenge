import DeleteTask from "../server-methods/DeleteTask";

const DeleteButton = (props) => {
  const { id, fetchTasks } = props;
  return (
    <button onClick={ () => DeleteTask(id, fetchTasks) }>Apagar</button>
  );
};

export default DeleteButton;
