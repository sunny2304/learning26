import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {

  const {register,handleSubmit,formState:{errors}} = useForm()
  const [userData, setuserData] = useState({})
  const [isSubmited, setisSubmited] = useState(false)

  const validationSchema = {

    nameValidator:{
      required:{ value:true, message:"Full Name is Required*" }
    },

    experienceValidator:{
      required:{ value:true, message:"Experience is Required*" },
      min:{ value:0, message:"Min 0 years required*" },
      max:{ value:20, message:"Max 20 years allowed*" }
    },

    skillValidator:{
      required:{ value:true, message:"Select at least one Skill*" }
    },

    genderValidator:{
      required:{ value:true, message:"Select Gender*" }
    }
  }

  const submitHandler = (data)=>{
    console.log(data)
    setuserData(data)
    setisSubmited(true)
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>Job Application Form</h1>

      <form onSubmit={handleSubmit(submitHandler)}>

        <div>
          <label>FULL NAME</label>
          <input type='text' {...register("name",validationSchema.nameValidator)} />
          {errors.name?.message}
        </div>

        <div>
          <label>EMAIL</label>
          <input type='text' {...register("email",validationSchema.emailValidator)} />
          {errors.email?.message}
        </div>

        <div>
          <label>EXPERIENCE (Years)</label>
          <input type='number' {...register("experience",validationSchema.experienceValidator)} />
          {errors.experience?.message}
        </div>

        <div>
          <label>SKILLS</label><br/>
          React <input type="checkbox" value="React" {...register("skills",validationSchema.skillValidator)} />
          Node <input type="checkbox" value="Node" {...register("skills")} />
          MongoDB <input type="checkbox" value="MongoDB" {...register("skills")} />
          <br/>
          {errors.skills?.message}
        </div>

        <div>
          <label>GENDER</label><br/>
          Male <input type="radio" value="Male" {...register("gender",validationSchema.genderValidator)} />
          Female <input type="radio" value="Female" {...register("gender")} />
          <br/>
          {errors.gender?.message}
        </div>

        <div>
          <input type='submit' />
        </div>

      </form>

      {
        isSubmited && <div>
          <h1>OUTPUT</h1>
          <h2>Name = {userData.name}</h2>
          <h2>Email = {userData.email}</h2>
          <h2>Experience = {userData.experience}</h2>
          <h2>Skills = {Array.isArray(userData.skills) ? userData.skills.join(", ") : userData.skills}</h2>
          <h2>Gender = {userData.gender}</h2>
        </div>
      }

    </div>
  )
}
