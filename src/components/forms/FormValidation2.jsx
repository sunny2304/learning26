import React from 'react'
import { useForm } from 'react-hook-form'

export const FormValidation2 = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()

    const submithandler = (data)=>{
        console.log(data)
    }

    const validationSchema={
            namevalidation:{
                required:{
                    value:true,
                    message:"name is required"

                }
            },
            contactvalidation:{
                required:{
                    value:true,
                    message:"contact is required"
                },
                pattern:{
                    value:/[6-9]{1}[0-9]{9}$/, //regex
                    message:"invalid contact."
                }
            },
        }
  return (
    <div style={{textAlign:"center"}}>
        <form onSubmit={handleSubmit(submithandler)}>
            <div>
                <label htmlFor="name"> Name : </label>
                <input type="text" {...register("name",validationSchema.namevalidation)}/>
                {errors.name?.message}
            </div>
            <div>
                <label htmlFor="name"> Contact : </label>
                <input type="text" {...register("contact",validationSchema.contactvalidation)}/>
                {errors.contact?.message}
            </div>
            <div>
                <label htmlFor="name"> Password </label>
                <input type="text" {...register("password",validationSchema.passwordvalidation)}/>
                <input type="text" {...register("password",validationSchema.passwordvalidation)}/>
                {errors.contact?.message}
            </div>
            <div>
                <input type="submit"/>
            </div>
        </form>
    </div> 
  )
}
