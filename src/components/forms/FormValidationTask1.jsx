import React from 'react'
import { useForm } from 'react-hook-form'

export const FormValidationTask1 = () => {
    const {register,handleSubmit,formstate:{errors}}=useForm()
    
    const submithandler = (data) =>{
        console.log(data)
    }
  return (
    <div>FormValidationTask1</div>
  )
}
