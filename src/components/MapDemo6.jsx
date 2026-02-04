import React from 'react'

export const MapDemo6 = () => {
  var students= [
    {id:1,name:"abc",college:"NLJIET",enrollment:123},
    {id:2,name:"bcd",college:"LD",enrollment:124},
    {id:3,name:"def",college:"LD",enrollment:125},
    {id:4,name:"efg",college:"NLJIET",enrollment:126},
    {id:5,name:"fgh",college:"VGEC",enrollment:127}
  ]
  return (
    <div>
        <table className='table'>
          <thead>
            <th>ID</th>
            <th>NAME</th>
            <th>COLLEGE</th>
            <th>ENROLLMENT</th>
          </thead>
          <tbody>
            {
              students.map((st)=>{
                return <tr style={{backgroundColor:st.id==4 && "yellow"}}>
                  <td>{st.id}</td>
                  <td style={{backgroundColor:st.name == "abc" && "pink"}}>{st.name}</td>
                  <td style={{color:st.college == "VGEC" && "red"}}>{st.college}</td>
                  <td style={{backgroundColor:st.enrollment <= 124 && "red",color:st.enrollment == 125 && "blueviolet"}}>{st.enrollment}</td>
                </tr>
              })
            }
          </tbody>
        </table>
    </div>
  )
}
