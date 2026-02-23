// import React, { useEffect, useState } from "react"
// import axios from "axios"
// import { useParams } from "react-router-dom"
// import 

// export const MovieDetail = () => {

//   const { id } = useParams()
//   const [movie, setMovie] = useState({})

//   useEffect(() => {
//     axios
//       .get(`https://www.omdbapi.com/?apikey=4bdab9e&i=${id}`)
//       .then((res) => {
//         setMovie(res.data)
//       })
//   }, [id])

//   return (
//     <div style={{ padding: "20px" } }>
//       <div style={{textAlign:"center"}}>
//       <h1>{movie.Title}</h1>
//       </div>
//       <div style={{display:"flex"}}>
//       <div style={{margin:"20px",border:"2px solid black"}}>
//       <img src={movie.Poster} height="300" style={{padding:"0px",margin:"0px",marginTop:"25px"}}/>
//       </div>

//       <div style={{margin:"50px",border:"2px solid black"}}>
//       <p><b>Year:</b> {movie.Year}</p>
//       <p><b>Rated:</b> {movie.Rated}</p>
//       <p><b>Released:</b> {movie.Released}</p>
//       <p><b>Runtime:</b> {movie.Runtime}</p>
//       <p><b>Genre:</b> {movie.Genre}</p>
//       <p><b>Director:</b> {movie.Director}</p>
//       <p><b>Writer:</b> {movie.Writer}</p>
//       <p><b>Actors:</b> {movie.Actors}</p>
//       <p><b>Plot:</b> {movie.Plot}</p>
//       <p><b>Language:</b> {movie.Language}</p>
//       <p><b>Country:</b> {movie.Country}</p>
//       <p><b>Awards:</b> {movie.Awards}</p>

//       <h3>Ratings</h3>
//       {
//         movie.Ratings?.map((r, index) => (
//           <p key={index}>
//             {r.Source} : {r.Value}
//           </p>
//         ))
//       }

//       <p><b>Metascore:</b> {movie.Metascore}</p>
//       <p><b>IMDB Rating:</b> {movie.imdbRating}</p>
//       <p><b>IMDB Votes:</b> {movie.imdbVotes}</p>
//       <p><b>IMDB ID:</b> {movie.imdbID}</p>
//       <p><b>Type:</b> {movie.Type}</p>
//       <p><b>DVD:</b> {movie.DVD}</p>
//       <p><b>Box Office:</b> {movie.BoxOffice}</p>
//       <p><b>Production:</b> {movie.Production}</p>
//       <p><b>Website:</b> {movie.Website}</p>
//       </div>
//       </div>
//     </div>
//   )
// }
