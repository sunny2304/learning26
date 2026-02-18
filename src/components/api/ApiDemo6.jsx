import React from "react"
import axios from "axios"
import { useForm } from "react-hook-form"

export const ApiDemo6 = () => {

  const { register, handleSubmit } = useForm()

  const addUser = async (data) => {
    // data object already matches API params
    try {
      const res = await axios.post(
        "https://node5.onrender.com/user/user/",
        data
      )
      console.log(res.data)
      alert("User added successfully")
    } catch (err) {
      console.log(err)
      alert("Error while adding user")
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO TASK</h1>

      <form onSubmit={handleSubmit(addUser)}>

        <input
          type="text"
          placeholder="Name"
          {...register("name")}
        />
        <br /><br />

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <br /><br />

        <input
          type="number"
          placeholder="Age"
          {...register("age")}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <br /><br />

        <label>
          Active
          <input
            type="checkbox"
            {...register("isActive")}
          />
        </label>

        <br /><br />

        <button type="submit">ADD</button>

      </form>
    </div>
  )
}
