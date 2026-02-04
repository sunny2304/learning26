import React from 'react'
import "../assets/css/content.css"
export default function ContentComponent() {

  var Student = {
    name:"sunny",
    college:"new lj institute of engineering and technology",
    city:"ahmedabad",
    marks:"9 SPI",
    tech:"MERN STACK",
    contact:"7600663041"
  }
  return (
    <div className='container'>
        <h1 >
            StudentDetails
        </h1>
        <h2>
          name : {Student.name}
        </h2>
        <h2>
          college : {Student.college}
        </h2>
        <h2>
          city : {Student.city}
        </h2>
        <h2>
          marks : {Student.marks}
        </h2>
        <h2>
          contact number : {Student.contact}
        </h2>
        <h2>
          technology : {Student.tech}
        </h2>
    </div>
  )
}
