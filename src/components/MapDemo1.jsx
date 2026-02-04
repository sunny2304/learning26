import React from 'react'

export const MapDemo1 = () => {
    var cars = ["audi","bmw","rr"]
  
    return (
    <div>
        <h1>map demo 1</h1>
        {
            cars.map((car)=>{
                return <h1>{car}</h1>
            })
        }
    </div>
  )
}
