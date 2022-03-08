import NewTaskButton from './NewTaskButton';

const NewTask = (props) => {
  const { name, setName, fetchTasks } = props;
  return (
    <div className=' text-center py-5'>
      <input
        value={ name }
        className='p-2 rounded-xl text-center'
        type="text"
        placeholder="Nome da tarefa"
        onChange={(e) => setName(e.target.value)}
      />
      <NewTaskButton name={ name } fetchTasks={ fetchTasks } setName= { setName }  />
    </div>
  );
};

export default NewTask;
