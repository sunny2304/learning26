import React from 'react'

export const MapDemo3 = () => {
    var student=[
        {id:1,name:"sunny",marks:100,city:"ahmedabad"},
        {id:2,name:"abc",marks:80,city:"rajkot"},
        {id:3,name:"def",marks:70,city:"surat"}
    ]
    return (
    <div>
        <table>
            <thead>
                <th>id</th>
                <th>name</th>
                <th>marks</th>
                <th>city</th>
            </thead>
            <tbody>
                {student.map((s)=>{
                    return <tr>
                        <td>{s.id}</td>
                        <td>{s.name}</td>
                        <td>{s.marks}</td>
                        <td>{s.city}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
