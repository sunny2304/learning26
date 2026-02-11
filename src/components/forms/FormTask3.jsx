import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormTask3 = () => {
  const { register, handleSubmit } = useForm()
  const [user, setUser] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const submitHandler = (data) => {
    console.log(data)
    setUser(data)
    setIsSubmitted(true)
  }

  return (
    <div style={{ textAlign: "center" }}>
        <h1>Scholarship Registration Form</h1> <br />
      <form onSubmit={handleSubmit(submitHandler)}>

        <div>
          <label>First Name </label>
          <input type="text" placeholder="enter first name" {...register("fname")} />
        </div>

        <div>
          <label>Last Name </label>
          <input type="text" placeholder="enter last name" {...register("lname")} />
        </div>

        <div>
          <label>Contact Number </label>
          <input type="text" placeholder="enter contact" {...register("contact")} />
        </div>

        <div>
          <label>Gender </label>
          Male <input type="radio" value="male" {...register("gender")} />
          Female <input type="radio" value="female" {...register("gender")} />
        </div>

        <div>
          <label>College Name </label>
          <input type="text" placeholder="enter college name" {...register("college")} />
        </div>

        <div>
          <label>Semester </label>
          <input type="text" placeholder="enter semester" {...register("semester")} />
        </div>

        <div>
          <label>Yearly Fees </label>
          <input type="text" placeholder="enter yearly fees" {...register("fees")} />
        </div>

        <div>
          <input type="submit" />
        </div>

      </form>

      {isSubmitted && user && (
        <div>
          <h1>
            {user.fname} &nbsp; {user.lname} <br />
            {user.gender} <br />
            {user.contact} <br />
            {user.college} <br />
            {user.semester} <br />
            {user.fees}
          </h1>
        </div>
      )}
    </div>
  )
}
