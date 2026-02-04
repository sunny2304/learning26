import React from 'react'

export const MapDemo5 = () => {
    var students=[
        {id:1,name:"a",age:23,marks:78,city:"ahmedabad"},
        {id:2,name:"b",age:24,marks:78,city:"ahmedabad"},
        {id:3,name:"c",age:22,marks:78,city:"ahmedabad"}
    ]
  return (
    <div>
        <table className='table'>
            <thead>
                <th>id</th>
                <th>name</th>
                <th>marks</th>
                <th>city</th>
            </thead>
            <tbody>
                {
                    students.map((s)=>{
                        return <tr>
                            <td>{s.id}</td>
                            <td style={{backgroundColor : s.age>23 && "red"}}>{s.name}</td>
                            <td>{s.marks}</td>
                            <td>{s.city}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
