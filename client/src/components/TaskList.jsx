import DeleteButton from "./DeleteButton";
import TaskStatus from "./TaskStatus.jsx";

const taskList = (props) => {
  const { tasks, fetchTasks } = props;
  return (
      <div className="border-2 w-screen ">
        {tasks.map(({ name, status, momentDate, _id }, index) => {
          const formatedDate = new Date(momentDate).toLocaleString();
            return (
                <div className="border-2 flex justify-around place-items-center" key={`${_id}`}>
                  <div>{ name ? name : 'TESTE' }</div>
                  <div><TaskStatus id={ _id }name={ name } status={ status } fetchTasks={ fetchTasks } /></div>
                  <div>{ formatedDate }</div>
                  <div><DeleteButton id={ _id } fetchTasks={ fetchTasks } /></div>
                </div>
            );
        })}
      </div>
  );
};

export default taskList;
