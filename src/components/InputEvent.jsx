import React, { useState } from 'react'

export const InputEvent = () => {
    const[name,setName]=useState("");

    const nameHandler=(event)=>{
        setName(event.target.value);
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Input Event</h1>
        <br />
        <br />
        <br />
        <label htmlFor="">Name</label>
        <input type="text" onChange={(event)=>{nameHandler(event)}}/>
        {name}
    </div>

  )
}
