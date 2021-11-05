const TaskStatus = (props) => {
  const statusDict = {
    0: "Pendente",
    1: "Em andamento",
    2: "Pronto"
  };

  const { status } = props
  return <p onClick={ () => console.log('deu') }>{statusDict[status]};</p>
};

export default TaskStatus;
