import './App.css';
import Control from './components/Control';
import ListTask from './components/ListTask';
import { createContext, useState, useEffect } from 'react';

export const dataList = createContext();
function App() {
  const [listTask, setListTask] = useState([]);
  const newData = (task)=> {
    setListTask([...listTask, task]);
  }
  const handleEditData = (editTask)=> {
    let newList = listTask.map((task)=>{
      if(editTask.taskId == task.taskId) {
        return {...task,taskName: editTask.taskName, status: editTask.status, taskId:editTask.taskId};
      } else  {
        return task;
      }
    })
    setListTask(newList);
  };
  const handleDelete = (task)=> {
    let dataTask = listTask.filter((dt)=>task.taskId != dt.taskId)
    dataTask.forEach((task,index)=>task.taskId = index);
    setListTask(dataTask);
  };
  const handleStatus = (deleteTask)=> {
    let newList = listTask.map((task)=>{
      if(deleteTask.taskId == task.taskId) {
        return {...task,taskName: deleteTask.taskName, status: "true", taskId:deleteTask.taskId};
      } else  {
        return task;
      }
    })
    setListTask(newList);
  };
  useEffect(() => {
    let listTaskLocal = JSON.parse(localStorage.getItem("listTask"));
    if (listTaskLocal == null) {
      listTaskLocal = [];
      localStorage.setItem("listTask", JSON.stringify(listTaskLocal));
    } else {
      setListTask(listTaskLocal);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("listTask", JSON.stringify(listTask))}
  ,[listTask]);
  return (
    <dataList.Provider value={{listTask:listTask,handleEditData:handleEditData, handleDelete:handleDelete, handleStatus:handleStatus}}>
    <div className="App">
      <Control newData={newData} listTask={listTask}></Control>
      <ListTask handleEditData={handleEditData}></ListTask>
    </div>
    </dataList.Provider>
  );
}

export default App;
