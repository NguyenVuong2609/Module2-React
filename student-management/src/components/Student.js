import React from "react";

export default function Student(props) {
  const { student, stt } = props;
  return (
    <tr>
      <td>{stt}</td>
      <td>{student.name}</td>
      <td>{student.address}</td>
      <td>
        <button>Edit</button>
      </td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  );
}
