import React from 'react'
import { Link } from 'react-router-dom'
export const NetflixMovies = () => {
  var movies=[
    {id:1,MovieName:"dhurandhar"},
    {id:2,MovieName:"baby"},
    {id:3,MovieName:"paatallok"}
  ]
  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>Movies</h1>
        {
          movies.map((movie)=>{
            return <li>
              <Link to={`/watch/${movie.MovieName}`}>{movie.MovieName}</Link>
            </li>
          })
        }
      
    </div>
  )
}
