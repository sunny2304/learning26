import React from "react";

export const StudentsDetails = ({ student }) => {
  return (
    <div style={{textAlign:"center"}}>
      <h3>Student Details</h3>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>Email: {student.email}</p>
    </div>
  );
};
