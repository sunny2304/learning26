import React from 'react'

export const InputTask = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>
            INPUT TASK
        </h1>
        <br />
        <br />
        <label htmlFor="Name">Name</label>
        <input type="text" />
        <br />
        <label htmlFor="Address">Address</label>
        <input type="text" />
        <br />
        <label htmlFor="Enrollment ">Enrollment</label>
        <input type="text" />
        <br />
        <label htmlFor="Contact">Contact</label>
        <input type="text" />
        <br />
        <label htmlFor="Email">Email</label>
        <input type="text" />
        <br />
        <label htmlFor="Branch">Branch</label>
        <input type="text" />
        <br />
        <label htmlFor="Company name">Company</label>
        <input type="text" />

    </div>
  )
}
