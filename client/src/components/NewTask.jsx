import NewTaskButton from './NewTaskButton';

const NewTask = (props) => {
  const { name, setName, fetchTasks } = props;
  return (
    <>
      <input
        type="text"
        placeholder="Nome da tarefa"
        onChange={(e) => setName(e.target.value)}
      />
      <NewTaskButton name={ name } fetchTasks={ fetchTasks }  />
    </>
  )
};

export default NewTask;