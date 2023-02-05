import React, {useEffect, useState} from "react";
import Task from "./Task";
import Notify from "./Notify";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import * as types from '../actions/index';
import * as db from '../services/taskServices';
import { PENDING } from '../constants/status';
import {NOTIFY_ADD_SUCCESS} from "../constants/messageNotify"

export default function ListTask() {
    const [taskStock, setTaskStock] = useState([]);
    const [taskName, setTaskName] = useState('');
    const listTask = useSelector(state=> state.listTask);
    const dispatch = useDispatch();
    useEffect(()=>{
        db.getTask().then((response)=> setTaskStock(response.data));
    },[taskStock])
    const handleAdd = ()=> {
        dispatch(types.act_add_task(taskName, PENDING));
        dispatch(types.act_change_notify(NOTIFY_ADD_SUCCESS));
        setTaskName('');
    }
    let elementTask = taskStock.map((task,index)=>{
        return <Task task={task} key={task.id} stt={index}/>
    })
    const handleKeyUp = (e)=> {
      if (e.keyCode == 13) {
        dispatch(types.act_add_task(taskName, PENDING));
        dispatch(types.act_change_notify(NOTIFY_ADD_SUCCESS));
        setTaskName('');
      }
    }
  return (
    <div className="InputList">
      <label>Name of task:</label>
      <input
        id="inputTask"
        type={"text"}
        name="taskName"
        value={taskName}
        onChange={(e)=> setTaskName(e.target.value)}
        onKeyUp={handleKeyUp}
        placeholder="Write your task's name here"
      />
      <button onClick={handleAdd}>Add</button>
      <br />
      <table className="tableList">
        <thead>
          <tr>
            <th>No.</th>
            <th>Task's Name</th>
            <th>Status</th>
            <th colSpan={3}>Actions</th>
          </tr>
        </thead>
        <tbody>{elementTask}</tbody>
      </table>
      <Notify/>
    </div>
  );
}
