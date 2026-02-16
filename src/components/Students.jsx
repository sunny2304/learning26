import React from "react";
import { StudentsDetails } from "./StudentsDetails";
import { StudentsTable } from "./StudentsTable";

export const Students = () => {
  const student = {
    name: "Sunny",
    age: 21,
    course: "CSE",
    email: "sunnys@gmail.com"
  };

  const studentsList = [
    { id: 1, name: "Amit", age: 22, course: "IT" },
    { id: 2, name: "Neha", age: 21, course: "CSE" },
    { id: 3, name: "Rahul", age: 23, course: "ME" }
  ];

  return (
    <div style={{textAlign:"center"}}>
      <h2>Students Component (Parent)</h2>

      <StudentsDetails student={student} />
      <StudentsTable students={studentsList} />
    </div>
  );
};
