import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as types from '../actions/index';
import {NOTIFY_DELETE_SUCCESS, NOTIFY_UPDATE_SUCCESS} from "../constants/messageNotify"
import { COMPLETED, FAILED, PENDING } from "../constants/status";

export default function Task(props) {
  const dispatch = useDispatch();
  const { task, stt } = props;
  const [newName, setNewName] = useState(task.name);
  const handleDelete = ()=> {
    dispatch(types.act_delete_task(task.id));
    dispatch(types.act_change_notify(NOTIFY_DELETE_SUCCESS))
  };
  const handleFinish = ()=> {
    dispatch(types.act_update_status(task.id, {...task, status: (task.status== PENDING || task.status == FAILED)? COMPLETED : FAILED}));
    dispatch(types.act_change_notify(NOTIFY_UPDATE_SUCCESS));
  };
  const handleEdit = ()=> {
    document.getElementById(`input${task.id}`).removeAttribute("disabled");
  }
  const handleChange = (e)=> {
    setNewName(e.target.value);
  }
  const handleKeyUp = (e)=> {
    if (e.keyCode == 13) {
      document.getElementById(`input${task.id}`).setAttribute("disabled","");
      dispatch(types.act_update_name(task.id, {...task, name: newName}))
      dispatch(types.act_change_notify(NOTIFY_UPDATE_SUCCESS));
    }
  };
  return (
    <tr key={task.id}>
      <td>{stt + 1}</td>
      <td>
        <input
          key={"task" + task.id}
          type={"text"}
          value={newName}
          id={"input" + task.id}
          onKeyUp={handleKeyUp}
          onChange={handleChange}
          disabled
        ></input>
      </td>
      <td>{task.status}</td>
      <td>
        <button onClick={handleEdit}>Edit</button>
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
      <td>
        <button onClick={handleFinish}>Finish</button>
      </td>
    </tr>
  );
}
