import DeleteButton from "./DeleteButton";

const taskList = (props) => {
    const { tasks, fetchTasks } = props;
    console.log(props)
    return (
        <table className="task-list">
          <tr>
            <td>Nome</td>
            <td>status</td>
            <td>Criacao</td>
          </tr>

          {tasks.map(({ name, status, momentDate, _id }, index) => {
            const formatedDate = new Date(momentDate).toLocaleString()
              return (
                  <tr key={`${_id}`}>
                    <td>{ name }</td>
                    <td>{ status }</td>
                    <td>{ formatedDate }</td>
                    <td><DeleteButton id={ _id } fetchTasks={ fetchTasks } /></td>
                  </tr>
              );
          })}
        </table>
    );
}

export default taskList;