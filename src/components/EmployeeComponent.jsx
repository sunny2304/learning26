import React from 'react'
import { EmployeeList } from './EmployeeList'

export const EmployeeComponent = () => {
    var title = "employee title"

    var company = {
        name:"TCS",
        year:2026
    }

    var employeeinfo =[
        {id:101,name:'abc',age:23},
        {id:102,name:'def',age:24},
        {id:103,name:'ghi',age:25}
    ]
  return (
    <div style={{textAlign:"center"}}>
        <br />
        <h1>
            EmployeeComponent
        </h1>
        <br />
        <br />
        <br />
        <br />
        <EmployeeList title = {title } company = {company} employeeinfo={employeeinfo}></EmployeeList>
    </div>
  )
}
