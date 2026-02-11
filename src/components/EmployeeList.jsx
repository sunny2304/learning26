import React from 'react'
import { SubEmployeeList } from './SubEmployeeList'

export const EmployeeList = (props) => {
  return (
    <div style={{textAlign:"center"}}>
        <h1> Employee List</h1>
        <br />
        {props.title}
        <br />
        {props.company.name}
        <br />
        {props.company.year}
        <br />
        <br />
        <table className='table'>
            <thead>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
            </thead>
            <tbody>
                {
                props.employeeinfo.map((emp)=>{
                    return<tr>
                        <td>
                            {emp.id}
                        </td>
                        <td>
                            {emp.name}
                        </td>
                        <td>
                            {emp.age}
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
        <SubEmployeeList title={props.title}></SubEmployeeList>
    </div>
  )
}
