import React from 'react'
import { Link } from 'react-router-dom'
export const NetflixShows = () => {
  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>NetflixShows</h1>
        <ul style={{padding}}>
        <li>
          <Link to="/watch/moneyheist">Money Heist</Link>
        </li>
        <li>
          <Link to="/watch/strangerthings">Stranger things</Link>
        </li>
        <li>
          <Link to="/watch/breakingbad">Breaking bad</Link>
        </li>
        </ul>
    </div>
  )
}

