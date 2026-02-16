import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormValidation = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()

    const validation = {
      namevalidation:{
        required:{
          value: true,
        message:"this is required"}        
      },
      agevalidation:{
        required:{
          value : true,
          message:"this is required"
        },
        min:{
          value : 18,
          message:"minimum should be 18"
        },
        max:{
          value : 70,
          message:"maximum should be 70"
        }
      }
    }
    const submithandler= (data)=>{
      console.log(data)
      alert ("form is submitted successfully")
    }
  

  return (
    <div>
    <div style={{textAlign:"center",marginTop:"100px"}}>
      <form onSubmit={handleSubmit(submithandler)}>
        <label htmlFor="name">name</label>
        <input type="text" {...register("name",validation.namevalidation)}/>
        {
          errors.name?.message
        }
        <br />
        <br />
        <label htmlFor="age">age</label>
        <input type="text" {...register("age",validation.agevalidation)}/>
        {
          errors.age?.message
        }
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
    </div>
  )
}
