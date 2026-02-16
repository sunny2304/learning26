import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {

  const {register,handleSubmit,formState:{errors}} = useForm()
  const [userData, setuserData] = useState({})
  const [isSubmited, setisSubmited] = useState(false)

  const validationSchema = {

    nameValidator:{
      required:{ value:true, message:"Participant Name is Required*" }
    },
    ageValidator:{
      required:{ value:true, message:"Age is Required*" },
      min:{ value:18, message:"Minimum age 18 required*" }
    },

    eventValidator:{
      required:{ value:true, message:"Select Event Type*" }
    },

    mealValidator:{
      required:{ value:true, message:"Select Meal Preference*" }
    }
  }

  const submitHandler = (data)=>{
    console.log(data)
    setuserData(data)
    setisSubmited(true)
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>Event Registration Form</h1>

      <form onSubmit={handleSubmit(submitHandler)}>

        <div>
          <label>PARTICIPANT NAME</label>
          <input type='text' {...register("name",validationSchema.nameValidator)} />
          {errors.name?.message}
        </div>

        <div>
          <label>MOBILE NO</label>
          <input type='text' {...register("mobile",validationSchema.mobileValidator)} />
          {errors.mobile?.message}
        </div>

        <div>
          <label>AGE</label>
          <input type='number' {...register("age",validationSchema.ageValidator)} />
          {errors.age?.message}
        </div>

        <div>
          <label>EVENT TYPE</label><br/>
          Workshop <input type="radio" value="Workshop" {...register("event",validationSchema.eventValidator)} />
          Seminar <input type="radio" value="Seminar" {...register("event")} />
          Hackathon <input type="radio" value="Hackathon" {...register("event")} />
          <br/>
          {errors.event?.message}
        </div>

        <div>
          <label>MEAL PREFERENCE</label>
          <select {...register("meal",validationSchema.mealValidator)}>
            <option value="">Select Meal</option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
          {errors.meal?.message}
        </div>

        <div>
          <input type='submit' />
        </div>

      </form>

      {
        isSubmited && <div>
          <h1>OUTPUT</h1>
          <h2>Name = {userData.name}</h2>
          <h2>Mobile = {userData.mobile}</h2>
          <h2>Age = {userData.age}</h2>
          <h2>Event = {userData.event}</h2>
          <h2>Meal = {userData.meal}</h2>
        </div>
      }

    </div>
  )
}
