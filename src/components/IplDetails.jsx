import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
export const IplDetails = () => {

    const teamname = useParams().name
  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
        <h1>Playing .. {teamname}</h1>
    </div>
  )
}
