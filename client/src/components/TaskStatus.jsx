import { useState } from "react";
import UpdateTask from "../server-methods/UpdateTask";

const TaskStatus = (props) => {
  const { status, name, fetchTasks, id } = props;

  const statusDict = {
    0: "Pendente",
    1: "Em andamento",
    2: "Pronto"
  };

  const sumStatus = (status) => {
    const statusNewValue = status === 2 ? 0 : status + 1;
    UpdateTask(name, statusNewValue, fetchTasks, id);
  }

  return <p onClick={ () => sumStatus(status) }>{statusDict[status]}</p>
};

export default TaskStatus;
