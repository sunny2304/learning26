import React, { useState } from 'react'

export const UseStateDemo2 = () => {
    const[loading,setloading]=useState(true)

    const stoploader=()=>{
        setloading(false)
    }
    const startloader=()=>{
        setloading(true)
    }
  return (
    <div style={{textAlign:'center'}}>
        {loading == true && <h1> Loading .... </h1>}
        <br />
        <br />
        <br />
        <button onClick={stoploader}>Stop loading </button>
        <br />
        <br />
        <button onClick={startloader}>Start loading </button>
    </div>
  )
}
