import React from 'react'

export const MapDemo2 = () => {
    var users = [
        {id:1,name:"sunny adesara",marks:90},
        {id:2,name:"abc",marks:80}
    ]
    return (
    <div>
        <h1>
            Map demo 2
        </h1>
        {
            users.map((u)=>{
                return <li>{u.id} - {u.name} - {u.marks}</li> 
            })
        }
    </div>
  )
}
