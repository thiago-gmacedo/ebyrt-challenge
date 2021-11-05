import NewTaskButton from './NewTaskButton';
import '../style/NewTask.css';

const NewTask = (props) => {
  const { name, setName, fetchTasks } = props;
  return (
    <div class="new-task-camp">
      <input
        type="text"
        placeholder="Nome da tarefa"
        onChange={(e) => setName(e.target.value)}
      />
      <NewTaskButton name={ name } fetchTasks={ fetchTasks }  />
    </div>
  );
};

export default NewTask;
