import UpdateTask from "../server-methods/UpdateTask";

const TaskStatus = (props) => {
  const { status, name, fetchTasks, id } = props;

  const statusDict = {
    0: { nome: "Pendente", className: 'bg-red-500 p-2 w-32 text-center' },
    1: { nome: "Em andamento", className: 'bg-yellow-500 p-2 w-32 text-center'},
    2: { nome: "Pronto", className: 'bg-green-500 p-2 w-32 text-center' },
  };
  
  const sumStatus = (status) => {
    const statusNewValue = status === 2 ? 0 : status + 1;
    UpdateTask(name, statusNewValue, fetchTasks, id);
  }
  return <p className={ statusDict[status].className } onClick={ () => sumStatus(status) }>{statusDict[status].nome}</p>
};

export default TaskStatus;
