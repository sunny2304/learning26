import React from 'react'

export const MapDemo4 = () => {
    var cities=[
        {id:1,name:"ahmedabad",pop:800000,aqi:300},
        {id:2,name:"mumbai",pop:1500000,aqi:350},
        {id:3,name:"delhi",pop:1200000,aqi:500},
        {id:4,name:"rajkot",pop:500000,aqi:240},
    ]
    return (
    <div>
        <table className='table active'>
            <thead>
                <th>id</th>
                <th>name</th>
                <th>population</th>
                <th>aqi</th>
            </thead>
            <tbody>
                {
                cities.map((city)=>{
                    return <tr>
                        <td>{city.id}
                        </td>
                        <td>{city.name}
                        </td>
                        <td>{city.pop}
                        </td>
                        <td>{city.aqi}
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
