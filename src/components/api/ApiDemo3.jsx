import React from 'react'
import axios from 'axios'
import { useState } from 'react'
export const ApiDemo3 = () => {
    
    const [users, setusers] = useState([])


    const getusers = async () => {
        const response = await axios.get("https://dummyjson.com/comments")
        setusers(response.data.comments)

    }
    return (
    <div style={{textAlign:"center",margin:"10px"}}>     
        <h1>ApiDemo2</h1>
        <button onClick={()=>{getusers()}}>Get </button>
        <table className='table'>
        <thead>
            <tr>
            <th>id</th>
            <th>body</th>
            <th>postId</th>
            <th>likes</th>
            <th>users</th>
            </tr>
        </thead>
        <tbody>
                {users.map((u)=>{
                    return <tr key={u.id}>
                        <td>
                            {u.id}
                        </td>
                        <td>
                            {u.body}
                        </td>
                        <td>
                            {u.postId}
                        </td>
                        <td>
                            {u.likes}
                        </td>
                        <td colSpan={3}>
                            <p>ID : {u.user.id} &nbsp;</p>
                            <p>USER NAME : {u.user.username} &nbsp;</p>
                            <p>FULL NAME : {u.user.fullName} &nbsp;</p>
                        </td>

                    </tr>            
                })}
        
        </tbody>
        </table>

    </div>
  )
}

