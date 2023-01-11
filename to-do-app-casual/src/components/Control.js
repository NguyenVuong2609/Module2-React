import React, { useState } from "react";

export default function Control(props) {
  const [taskName, setTaskName] = useState({
    taskName: "",
    status: "false",
    taskId: "",
  });
  const handleAdd = () => {
    let value = document.getElementById("myInput").value;
    if (value != ''){
      setTaskName({ taskName: "", status: "false", taskId: "" });
      props.newData(taskName);
    };
  };
  const handleChange = (e) => {
    let value = e.target.value;
    setTaskName({
      taskName: value,
      status: "false",
      taskId: props.listTask.length,
    });
  };
  const keyCode = (e) => {
    if (e.keyCode == 13 && e.target.value != "") {
      setTaskName({ taskName: "", status: "false", taskId: "" });
      props.newData(taskName);
    }
  };
  return (
    <div>
      <div id="myDIV" className="header">
        <h2>To do App</h2>
        <input
          onKeyUp={(e) => keyCode(e)}
          type="text"
          id="myInput"
          placeholder="Write your task here..."
          onChange={handleChange}
          value={taskName.taskName}
        />
        <button className="addBtn" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}
