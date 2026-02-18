import React from 'react'
import { useState } from 'react'
import axios from 'axios'
export const OmdbApi = () => {
    const [movies, setmovies] = useState([])
    const [params, setparams] = useState("iron man")

    const searchMovie= async()=>{
        const res = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=4bdab9e&s=${params}`) 
        setmovies(res.data.Search)

    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>OMDB api</h1>
        <br />
        <br />
        <button onClick={searchMovie}>Search Movie</button>


        <table className='table'>
            <thead>
                <th>Title</th>
                <th>Year</th>
                <th>imdbID</th>
                <th>Type</th>
                <th>Poster</th>
            </thead>
            <tbody>
                {
                    movies.map((movie)=>{
                        return <tr key={movie.imdbID}>
                            <td>{movie.Title}</td>
                            <td>{movie.Year}</td>
                            <td>{movie.imdbID}</td>
                            <td>{movie.Type}</td>
                            <td>
                                <img src={movie.Poster} style={{height:"150px",width:"150px"}}></img>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
