import React, { useState } from "react"
import axios from "axios"

export const MovieTask2 = () => {

  const [movieName, setMovieName] = useState("")
  const [movies, setMovies] = useState([])

  const searchMovies = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=4bdab9e&s=${movieName}`
    )
    setMovies(res.data.Search)
  }

  return (
    <div>
      {/* input */}
      <input
        type="text"
        placeholder="Enter movie name"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />

      <button onClick={searchMovies}>Search</button>

      <br /><br />

      <table className="table">
        <thead>
          <tr>
            <th>Poster</th>
            <th>Title</th>
            <th>Year</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {movies?.map((m) => (
            <tr key={m.imdbID}>
              <td>
                <img src={m.Poster} height="100" />
              </td>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
