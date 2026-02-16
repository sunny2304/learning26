// import React from "react";

// export const StudentsTable = ({ students }) => {
//   return (
//     <div style={{textAlign:"center"}}>
//       <h3>Students Table(CHILD - reusable table)</h3>

//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Course</th>
//           </tr>
//         </thead>

//         <tbody>
//           {students.map((stu) => (
//             <tr key={stu.id}>
//               <td>{stu.name}</td>
//               <td>{stu.age}</td>
//               <td>{stu.course}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }


import React from "react";

export const StudentsTable = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{props.title}</h1>

      {/* College info (same idea as company in Employees) */}
      <h2>{props.college?.name}</h2>
      <h3>{props.college?.year}</h3>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
        </thead>

        <tbody>
          {props.students.map((stu) => {
            return (
              <tr key={stu.id}>
                <td>{stu.id}</td>
                <td>{stu.name}</td>
                <td>{stu.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
