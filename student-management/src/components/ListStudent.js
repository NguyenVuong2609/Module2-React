import React, {useState, useEffect} from 'react';
import Student from './Student';
import Notify from "./Notify";
import * as types from '../actions/index';
import * as db from '../services/studentServices';

export default function ListStudent() {
    const [studentStock, setStudentStock] = useState([]);
    useEffect(()=>{
        db.getStudent().then((response)=> setStudentStock(response.data));
    },[studentStock])
    const elementStudent = studentStock.map((st,index) => {
        return <Student student={st} stt={index+1}/>
    })
  return (
    <div className='col-8 listStudent'>
        <h3>List Student</h3>
        <table>
            <thead>
                <tr>
                    <td>No.</td>
                    <td>Name</td>
                    <td>Address</td>
                    <td colSpan={2}>Actions</td>
                </tr>
            </thead>
            <tbody>
                {elementStudent}
            </tbody>
        </table>
    </div>
  )
}
