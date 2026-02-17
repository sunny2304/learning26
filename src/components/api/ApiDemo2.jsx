import React from 'react'
import axios from 'axios'
import { useState } from 'react'
export const ApiDemo2 = () => {
    
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])


    const getusers = async () => {
        const response = await axios.get("https://node5.onrender.com/user/user/")
        setmessage(response.data.message)
        setusers(response.data.data)

    }
    return (
    <div style={{textAlign:"center",margin:"10px"}}>     
        <h1>ApiDemo2</h1>
        <button onClick={()=>{getusers()}}>Get </button>
        <table className='table'>
        <thead>
            <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>password</th>
            <th>age</th>
            <th>isactive</th>
            <th>version</th>
            </tr>
        </thead>
        <tbody>
                {users.map((u)=>{
                    return <tr key={u._id}>
                        <td>
                            {u._id}
                        </td>
                        <td>
                            {u.name}
                        </td>
                        <td>
                            {u.email}
                        </td>
                        <td>
                            {u.password}
                        </td>
                        <td>
                            {u.age}
                        </td>
                        <td>
                            {u.isActive ? "yes" : "no"}
                        </td>
                        <td>
                            {u.__v}
                        </td>

                    </tr>            
                })}
        
        </tbody>
        </table>

    </div>
  )
}
