import React, { useState, useContext } from "react";
import {dataList} from '../App.js'

export default function Task(props) {
  const getDataList = useContext(dataList);
  const { data } = props;
  const { index } = props;
  const [taskName, setTaskName] = useState({
    taskName: data.taskName,
    status: data.status,
    taskId: data.taskId
  });
  const handleChange = (e) => {
    data.taskName = e.target.value;
    setTaskName({
      taskName: data.taskName,
      status: "false",
      taskId: data.taskId,
    });
  };
  const toogleInput = (id) => {
    document.getElementById(`input${id}`).removeAttribute("disabled");
    document
      .getElementById(`input${id}`)
      .setAttribute("style", "border: 1px solid green; outline: none;");
  };
  const toogleStatus = (task)=> {
    getDataList.handleStatus(task)
  }
  const taskDelete = (task)=> {
    let confirm = window.confirm('Are you sure you want to delete?');
    if (confirm == true){
      getDataList.handleDelete(task);
    };
  };
  const keyCode = (e, id) => {
    if (e.keyCode == 13) {
      document.getElementById(`input${id}`).setAttribute("disabled", "");
      document.getElementById(`input${id}`).removeAttribute("style");
      getDataList.handleEditData(taskName);
    }
  };
  let classStatus = data.status == "true"? "finished" : "notYet";
  return (
    <>
      <tr className={classStatus}>
        <td>{index + 1}</td>
        <td>
          <input
            key={"input" + data.taskId}
            onKeyDown={(e, id) => keyCode(e, data.taskId)}
            id={"input" + data.taskId}
            type={"text"}
            value={data.taskName}
            onChange={(e) => handleChange(e)}
            disabled
          />
        </td>
        <td>{data.status == "true" ? "Completed" : "In progress"}</td>
        <td>
          <button onClick={(id) => toogleInput(data.taskId)}>Edit</button>
        </td>
        <td>
          <button onClick={(task)=>taskDelete(data)}>Delete</button>
        </td>
        <td>
          <button onClick={(task)=> toogleStatus(data)}>Finish</button>
        </td>
      </tr>
    </>
  );
}
