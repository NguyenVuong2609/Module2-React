import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as types from "../actions"

export default function AddForm() {
  const dispatch = useDispatch();
  const [studentName, setStudentName] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const handleName = (e) => {
    setStudentName(e.target.value);
  };
  const handleAddress = (e) => {
    setStudentAddress(e.target.value);
  };
  const addStudent = () => {
    dispatch(types.act_add_student({name: studentName, address: studentAddress}));
    setStudentAddress('');
    setStudentName('');
  };
  return (
    <div className="col-4 form">
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Form</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Student's name:</td>
            <td>
              <input
                type="text"
                placeholder="Name..."
                onChange={handleName}
                value={studentName}
              />
            </td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>
              <input
                type="text"
                placeholder="Address..."
                onChange={handleAddress}
                value={studentAddress}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button onClick={addStudent}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
