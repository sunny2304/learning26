import React, { useState } from 'react'

export const InputTask1 = () => {
  const [name, setName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [input,setinput] = useState("")
  const nameHandler = (event) => {
    setName(event.target.value)
  }

  const display = () => {
    setinput(name)
    setIsSubmitted(true)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Input Task</h1>

      First Name :
      <input type="text" onChange={nameHandler} />

      <br /><br />

      <button onClick={display}>Click</button>

      <br /><br />

      {isSubmitted && <h1>{input}</h1>}
    </div>
  )
}
