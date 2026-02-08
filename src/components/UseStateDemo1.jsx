import React, { useState } from 'react'

export const UseStateDemo1 = () => {
    const[count,setcount]=useState(0)

    const increasecount=()=>{
        setcount(count+1)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Count : {count}</h1><br></br><br></br>
        
        <button style={{textAlign:'right'}} onClick={increasecount} >Increase Count</button>
    </div>
  )
}
