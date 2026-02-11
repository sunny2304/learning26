import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
export const FormTask2 = () => {
  const {register,handleSubmit}=useForm()
  const [user,setuser]=useState({})
  const [issubmitted,setissubmited]=useState(false)

  const submithandler = (data)=>{
    console.log(data)
    setuser(data)
    setissubmited(true)
  }
  return (
    <div style={{textAlign:"center"}}>
      <h1>
        Employee Registration form
      </h1>
      <form onSubmit={handleSubmit(submithandler)}>
        <div>
          <label htmlFor="">First Name </label>
          <input type="text" placeholder='enter first name' {...register("fname")}/>
        </div>
        <div>
          <label htmlFor="">Last Name </label>
          <input type="text" placeholder='enter first name' {...register("lname")}/>
        </div>
        <div>
          <label htmlFor="">Conact Number </label>
          <input type="text" placeholder='enter first name' {...register("contact")}/>
        </div>
        <div>
          <label htmlFor="">Gender</label>
          Male : <input type="radio" value="male" {...register("gender")}/>
          Female : <input type="radio" value="female" {...register("gender")}/>
        </div>
        <div>
          <label htmlFor="">Employee Position</label>
          <select {...register("empposition")}>
            <option value="manager">Manager</option>
            <option value="developer">Developer</option>
            <option value="qa">QA </option>
            <option value="bde">BDE</option>
          </select>
        </div>
        <div>
          <input type="submit" />
        </div>
        {
          issubmitted == true && <div>
          <h1>
            {user.fname} &nbsp;
            {user.lname} <br />
            {user.contact} <br />
            {user.gender} <br />
            {user.empposition} <br />
          </h1>
          </div>
        }
      </form>

    </div>
  )
}
