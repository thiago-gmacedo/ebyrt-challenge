import DeleteTask from "../server-methods/DeleteTask";

const DeleteButton = (props) => {
  const { id, fetchTasks } = props;
  return (
    <button className="btn bg-red-600" onClick={ () => DeleteTask(id, fetchTasks) }>Apagar</button>
  );
};

export default DeleteButton;
