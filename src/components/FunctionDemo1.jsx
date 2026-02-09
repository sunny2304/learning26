import React from 'react'

export const FunctionDemo1 = () => {
    const test = ()=>{
        alert("function called ")
    }
    const test2 = (x) =>{
        alert("value of x : "+x)
    }
  return (
    <div style={{textAlign:"center"}}>FunctionDemo1
    <br />
    <br />
    <br />
    <button onClick={test()}>Click</button>
    <br />
    <br />
    <br />
    <button onClick={()=>{test2(100)}}>Click 2</button>
    </div>
  )
}
