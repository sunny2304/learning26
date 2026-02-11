import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
export const FormTask1 = () => {
    const {register,handleSubmit} = useForm()
    const [user, setuser] = useState({})
    const [issubmit,setissubmit]= useState(false)
    const submithandler = (data)=>{
        console.log(data)
        setuser(data)
        setissubmit(true)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>COURSE REGISTRATION FORM </h1>
        <br />
        <br />
        <div>
            <form onSubmit={handleSubmit(submithandler)}>
                <div>
                    <label htmlFor="">First Name : </label>
                    <input type="text" placeholder='enter first name' {...register("fname")} />
                </div>
                <div>
                    <label htmlFor="">Last Name : </label>
                    <input type="text" placeholder='enter last name' {...register("lname")} />
                </div>
                <div>
                    <label htmlFor="">Age : </label>
                    <input type="text" placeholder='enter age' {...register("age")} />
                </div>
                <div>
                    Male : <input type="radio" value='male' {...register("gender")} />
                    Female : <input type="radio" value='female' {...register("gender")} />
                </div>
                <div>
                    c : <input type="checkbox" value='c' {...register("skills")} />
                    C++ : <input type="checkbox" value='C++' {...register("skills")} />
                    Java : <input type="checkbox" value='JAVA' {...register("skills")} />
                    Javascript : <input type="checkbox" value='JS' {...register("skills")} />
                    Python : <input type="checkbox" value='PYTHON' {...register("skills")} />
                </div>
                <div>
                    <label>city</label>
                    <select {...register("city")}>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Rajkot">Rajkot</option>
                    </select>
                </div>

                <input type="submit" ></input>
            </form>
        </div>
        <br /><br />
        {issubmit == true && <div>
            <h1>
                {user.fname} <br />
                {user.lname} <br />
                {user.age} <br />
                {user.gender} <br />
                {user.city} <br />
            </h1>
        </div>
}
    </div>
  )
}
