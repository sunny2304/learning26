import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export const MovieGrid = () => {

  const [movies, setMovies] = useState([])

  const searchMovies = async () => {
    const res = await axios.get(
      "https://www.omdbapi.com/?apikey=4bdab9e&s=Avatar"
    )
    setMovies(res.data.Search)
  }

  return (
    <div>
      <button onClick={searchMovies}>Load Movies</button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        {movies.map((m) => (
          <div
            key={m.imdbID}
            style={{ border: "1px solid black", padding: "10px" }}
          >
            <img
              src={m.Poster}
              alt={m.Title}
              style={{ width: "100%", height: "250px" }}
            />

            <p>{m.Title}</p>

            <Link to={`/movie/${m.imdbID}`}>
              <button>Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
