import React from 'react'
import axios from 'axios'
import { useState } from 'react'
export const ApiDemo1 = () => {
  
  const [message, setmessage] = useState("")
  const [user, setuser] = useState([])
  const getuser =  async()=>{
    const response = await axios.get("https://node5.onrender.com/user/user/")
    console.log(response)
    console.log(response.data.message)
    setmessage(response.data.message)
    setuser(response.data.data)
  }
  return (
    <div style={{textAlign:"center"}}>ApiDemo1
    <br />
    <br />
    <br />
    <button onClick={()=>{getuser()}} >GET </button>

    <h1>
      Message = {message} <br />
      <br />
      <br />
      <h1>
        {
          user.map((u)=>{
            return <li>
              {u.name}
            </li>
          })
        }
      </h1>
    </h1>
    </div>
  )
}
