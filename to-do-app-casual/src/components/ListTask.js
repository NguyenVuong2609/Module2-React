import React, {useContext, createContext} from 'react'
import Task from './Task'
import {dataList} from '../App.js'

export default function ListTask(props) {
    const getDataList = useContext(dataList);
    const elementTask = getDataList.listTask.map((task,index) =>{
        return <Task key={"child" + task.taskId} data={task} index={index}></Task>
    })
    return (
    <div>
        <table className='tableTask'>
            <thead>
            <tr>
                <th>No.</th>
                <th>Task's Name</th>
                <th>Status</th>
                <th colSpan={3}>Actions</th>
            </tr>
            </thead>
            <tbody>
            {elementTask}
            </tbody>
        </table>
    </div>
  )
}
